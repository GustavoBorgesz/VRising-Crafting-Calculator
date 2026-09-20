const D=window.VRISING_DATA;
const items=new Map(D.items.map(function(x){return [x[0],{id:x[0],name:x[1],icon:x[2]}]}));
const recipes=D.recipes.map(function(x){return {from:x[0],to:x[1],qty:x[2],produces:x[3],altQty:x[4]||-1}});
const byProduct=new Map();
recipes.forEach(function(r){if(!byProduct.has(r.to))byProduct.set(r.to,[]);byProduct.get(r.to).push(r)});
function el(id){return document.getElementById(id)}
var selected="SludgeFilledCanister",plan=[];
function recipeFor(id){return byProduct.get(id)||[]}
function fmt(n){return Number.isInteger(n)?n.toLocaleString("pt-BR"):n.toLocaleString("pt-BR",{maximumFractionDigits:2})}
function calculate(id,qty,recursive,useAlt){
  var rs=recipeFor(id),direct=new Map(),totals=new Map();
  function add(m,k,n){m.set(k,(m.get(k)||0)+n)}
  if(!rs.length)return {direct:direct,totals:totals,batches:0,output:1};
  var first=rs[0],batches=Math.ceil(qty/(first.produces||1));
  rs.forEach(function(r){var q=useAlt&&r.altQty>0?r.altQty:r.qty;add(direct,r.from,batches*q)});
  if(!recursive)return {direct:direct,totals:direct,batches:batches,output:first.produces||1};
  function expand(key,n,path){
    var rr=recipeFor(key);
    if(!rr.length||path.indexOf(key)!==-1){add(totals,key,n);return}
    var r=rr[0],b=Math.ceil(n/(r.produces||1));
    rr.forEach(function(x){var q=useAlt&&x.altQty>0?x.altQty:x.qty;expand(x.from,b*q,path.concat(key))});
  }
  rs.forEach(function(r){var q=useAlt&&r.altQty>0?r.altQty:r.qty;expand(r.from,batches*q,[id])});
  return {direct:direct,totals:totals,batches:batches,output:first.produces||1}
}
function renderSuggestions(){
  var q=el("search").value.trim().toLowerCase(),box=el("suggestions");
  if(!q){box.innerHTML="";return}
  var found=Array.from(items.values()).filter(function(x){return x.name.toLowerCase().indexOf(q)!==-1}).slice(0,8);
  box.innerHTML=found.map(function(x){return '<div class="suggestion" data-id="'+x.id+'">'+x.icon+' &nbsp;'+x.name+'</div>'}).join("");
  box.querySelectorAll(".suggestion").forEach(function(n){n.onclick=function(){selected=n.dataset.id;el("search").value="";box.innerHTML="";render()}})
}
function render(){
  var item=items.get(selected),qty=Math.max(1,parseInt(el("quantity").value)||1),recursive=el("recursive").checked,alt=el("alt").checked,rs=recipeFor(selected),first=rs[0],c=calculate(selected,qty,recursive,alt);
  el("selectedIcon").textContent=item.icon;el("selectedName").textContent=item.name;
  el("selectedMeta").textContent=first?"Crafting recipe · "+(first.produces||1)+" por receita":"Matéria-prima / sem receita";
  el("resultTitle").textContent=item.name+" × "+fmt(qty);el("recipeOutput").textContent=first?"Produz "+fmt(first.produces||1):"Sem receita";
  el("summary").innerHTML='<div class="stat"><b>'+fmt(c.batches)+'</b> receita(s)</div><div class="stat"><b>'+fmt(c.totals.size)+'</b> material(is)</div><div class="stat">'+(recursive?"Cadeia completa":"Somente ingredientes diretos")+"</div>";
  var entries=Array.from(c.totals.entries()).sort(function(a,b){return b[1]-a[1]});
  el("materials").innerHTML=entries.length?entries.map(function(pair){var id=pair[0],n=pair[1],x=items.get(id)||{name:id,icon:"•"};return '<div class="material"><div class="material-left"><div class="item-icon">'+x.icon+'</div><div><div class="material-name">'+x.name+'</div><div class="material-type">'+(recipeFor(id).length?"fabricável":"matéria-prima")+'</div></div></div><b>'+fmt(n)+'</b></div>'}).join(""):'<div class="empty">Este item não possui ingredientes cadastrados.</div>';
}
function addCurrent(){
  var qty=Math.max(1,parseInt(el("quantity").value)||1),i=plan.find(function(x){return x.id===selected});
  if(i)i.qty+=qty;else plan.push({id:selected,qty:qty});renderPlan()
}
function renderPlan(){
  el("planItems").innerHTML=plan.length?plan.map(function(p,i){var x=items.get(p.id);return '<div class="plan-row"><span>'+x.icon+' &nbsp;'+x.name+' × '+fmt(p.qty)+'</span><button data-i="'+i+'">remover</button></div>'}).join(""):'<div class="empty">Adicione itens à lista para somar tudo em uma única lista de farm.</div>';
  el("planItems").querySelectorAll("button").forEach(function(b){b.onclick=function(){plan.splice(+b.dataset.i,1);renderPlan()}});
  if(!plan.length){el("planTotals").innerHTML="";return}
  var totals=new Map();
  function add(m,k,n){m.set(k,(m.get(k)||0)+n)}
  plan.forEach(function(p){var c=calculate(p.id,p.qty,true,el("alt").checked);c.totals.forEach(function(n,id){add(totals,id,n)})});
  el("planTotals").innerHTML=Array.from(totals.entries()).sort(function(a,b){return b[1]-a[1]}).map(function(pair){var x=items.get(pair[0])||{name:pair[0],icon:"•"};return '<div class="plan-total"><b>'+x.icon+' '+fmt(pair[1])+'</b><span>'+x.name+'</span></div>'}).join("");
}
el("search").addEventListener("input",renderSuggestions);el("quantity").addEventListener("input",render);
el("minus").onclick=function(){el("quantity").value=Math.max(1,(+el("quantity").value||1)-1);render()};
el("plus").onclick=function(){el("quantity").value=Math.min(999999,(+el("quantity").value||1)+1);render()};
el("recursive").onchange=render;el("alt").onchange=function(){render();renderPlan()};el("addPlan").onclick=addCurrent;
el("clearPlan").onclick=function(){plan=[];renderPlan()};
el("copy").onclick=async function(){var c=calculate(selected,+el("quantity").value,el("recursive").checked,el("alt").checked),lines=[items.get(selected).name+" × "+el("quantity").value,""];c.totals.forEach(function(n,id){lines.push("- "+(items.get(id)?items.get(id).name:id)+": "+fmt(n))});try{await navigator.clipboard.writeText(lines.join("\n"));el("copy").textContent="✓ Copiado";setTimeout(function(){el("copy").textContent="Copiar materiais"},1200)}catch(e){}};
el("dataVersion").textContent="Dados: "+D.version+" · pronto para atualização";
render();renderPlan();