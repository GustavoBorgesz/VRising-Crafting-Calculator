const D=window.VRISING_DATA;
const items=new Map(D.items.map(function(x){return [x[0],{id:x[0],name:x[1],icon:x[2]}]}));
const recipes=D.recipes.map(function(x){return {from:x[0],to:x[1],qty:x[2],produces:x[3],altQty:x[4]||-1}});
const byProduct=new Map();
recipes.forEach(function(r){if(!byProduct.has(r.to))byProduct.set(r.to,[]);byProduct.get(r.to).push(r)});

const PT={
Wood:"Madeira",Sawdust:"Serragem",Plank:"Tábua",IronOre:"Minério de Ferro",IronIngot:"Lingote de Ferro",
ReinforcedPlank:"Tábua Reforçada",SludgeFilledCanister:"Recipiente com Lodo",MutantGrease:"Gordura Mutante",
Quartz:"Quartzo",Glass:"Vidro",EmptyGlassBottle:"Garrafa de Vidro Vazia",RadiumAlloy:"Liga de Rádio",
TechScrap:"Sucata Tecnológica",SulphurOre:"Minério de Enxofre",Sulphur:"Enxofre",PowerCore:"Núcleo de Energia",
ChargedBattery:"Bateria Carregada",Stone:"Pedra",StoneBrick:"Tijolo de Pedra",StoneDust:"Pó de Pedra",
Whetstone:"Pedra de Amolar",CopperIngot:"Lingote de Cobre",CopperOre:"Minério de Cobre",CopperCoin:"Moeda de Cobre",
Scourgestone:"Pedra da Praga",GraveDust:"Pó de Túmulo",Bone:"Osso",SpectralDust:"Pó Espectral",
GhostCrystal:"Cristal Fantasma",Obsidian:"Obsidiana",GemDust:"Pó de Gemas",Gems:"Gemas",SilverOre:"Minério de Prata",
DarkSilverIngot:"Lingote de Prata Negra",SilverCoin:"Moeda de Prata",OnyxTear:"Lágrima de Ônix",
EmberGlass:"Vidro Incandescente",VenomSap:"Seiva Venenosa",Emery:"Esmeril",GoldIngot:"Lingote de Ouro",
CorruptedOak:"Carvalho Corrompido",GoldJewelry:"Joia de Ouro",GoldsunCoin:"Moeda do Sol Dourado",
PlantFibre:"Fibra Vegetal",Paper:"Papel",CoarseThread:"Fio Grosso",Pollen:"Pólen",Cotton:"Algodão",
Scroll:"Pergaminho",Schematic:"Esquema",WoolThread:"Fio de Lã",Cloth:"Tecido",Leather:"Couro",
RuggedHide:"Pele Rústica",Silkworm:"Bicho-da-Seda",Silk:"Seda",ShadowWeave:"Trama Sombria",
CarpetRoll:"Rolo de Tapete",GhostYarn:"Fio Fantasma",CottonYarn:"Fio de Algodão",GhostShroom:"Cogumelo Fantasma",
CursedWood:"Madeira Amaldiçoada",BatLeather:"Couro de Morcego",PristineHide:"Pele Imaculada",
PristineLeather:"Couro Imaculado",BatHide:"Pele de Morcego",ThickLeather:"Couro Grosso",Oil:"Óleo",
HallowWood:"Madeira Sagrada",ThickHide:"Pele Grossa"
};

const I18N={
"pt-BR":{
eyebrow:"CALCULADORA DE MATERIAIS",heroTitle:"Quanto eu preciso farmar?",
heroText:"Escolha um item pela lista ou use a busca, defina a quantidade e veja os materiais diretos ou toda a cadeia até as matérias-primas.",
itemToCraft:"Item para fabricar",searchPlaceholder:"Buscar item...",itemList:"Lista de itens",desiredQuantity:"Quantidade desejada",
fullChain:"Cadeia completa",fullChainHelp:"Substitui itens fabricáveis pelas matérias-primas",economicRecipe:"Usar receita econômica",
economicHelp:"Quando houver quantidade alternativa",addList:"＋ Adicionar à lista",copyMaterials:"Copiar materiais",result:"RESULTADO",
productionList:"LISTA DE PRODUÇÃO",myList:"Minha lista de fabricação",clear:"Limpar",
emptyPlan:"Adicione itens à lista para somar tudo em uma única lista de farm.",direct:"Somente ingredientes diretos",
complete:"Cadeia completa",craftable:"fabricável",raw:"matéria-prima",recipe:"receita(s)",materials:"material(is)",
produces:"Produz",perRecipe:"por receita",noRecipe:"Matéria-prima / sem receita",noRecipeShort:"Sem receita",
noIngredients:"Este item não possui ingredientes cadastrados.",remove:"remover",copied:"✓ Copiado",
copyMaterialsDefault:"Copiar materiais",count:"itens",footer:"Fan-made project · V Rising is property of Stunlock Studios · Icons: V Rising Wiki",
chooseItem:"Escolha um item na lista ou pela busca.",
treeEyebrow:"ÁRVORE DE FABRICAÇÃO",treeTitle:"Do item final aos materiais",treeHint:"Cada linha liga um item aos ingredientes usados para fabricá-lo."
},
"en":{
eyebrow:"MATERIAL CALCULATOR",heroTitle:"How much do I need to farm?",
heroText:"Choose an item from the list or use search, set the quantity, and see direct materials or the full chain down to raw materials.",
itemToCraft:"Item to craft",searchPlaceholder:"Search item...",itemList:"Item list",desiredQuantity:"Desired quantity",
fullChain:"Full chain",fullChainHelp:"Expands craftable items into raw materials",economicRecipe:"Use economical recipe",
economicHelp:"When an alternative quantity is available",addList:"＋ Add to list",copyMaterials:"Copy materials",result:"RESULT",
productionList:"PRODUCTION LIST",myList:"My crafting list",clear:"Clear",
emptyPlan:"Add items to the list to combine everything into one farming list.",direct:"Direct ingredients only",
complete:"Full chain",craftable:"craftable",raw:"raw material",recipe:"recipe(s)",materials:"material(s)",
produces:"Produces",perRecipe:"per recipe",noRecipe:"Raw material / no recipe",noRecipeShort:"No recipe",
noIngredients:"This item has no registered ingredients.",remove:"remove",copied:"✓ Copied",
copyMaterialsDefault:"Copy materials",count:"items",footer:"Fan-made project · V Rising is property of Stunlock Studios · Icons: V Rising Wiki",
chooseItem:"Choose an item from the list or search.",
treeEyebrow:"CRAFTING TREE",treeTitle:"From final item to materials",treeHint:"Each line links an item to the ingredients used to craft it."
}
};
let lang="pt-BR";
let selected="SludgeFilledCanister",plan=[];

function iconUrl(id){
  var p=window.ICONS&&window.ICONS[id];
  return p?window.ICON_BASE+p+"/60px-"+p.split("/").pop():"";
}
function iconHTML(id){
  var x=items.get(id),emoji=x?x.icon:"•",u=iconUrl(id);
  if(!u)return emoji;
  return '<img class="ico" src="'+u+'" alt="" loading="lazy" decoding="async" data-emoji="'+emoji+'" onerror="iconFallback(this)">';
}
function iconFallback(img){
  var s=document.createElement("span");
  s.textContent=img.getAttribute("data-emoji");
  img.replaceWith(s);
}
function el(id){return document.getElementById(id)}
function t(key){return I18N[lang][key]||key}
function itemName(id){var x=items.get(id);return x?(lang==="pt-BR"?(PT[id]||x.name):x.name):id}
function recipeFor(id){return byProduct.get(id)||[]}
function fmt(n){return Number.isInteger(n)?n.toLocaleString(lang):n.toLocaleString(lang,{maximumFractionDigits:2})}
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
  return {direct:direct,totals:totals,batches:batches,output:first.produces||1};
}
function applyLanguage(){
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(function(n){n.textContent=t(n.dataset.i18n)});
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function(n){n.placeholder=t(n.dataset.i18nPlaceholder)});
  el("langPT").classList.toggle("active",lang==="pt-BR");el("langEN").classList.toggle("active",lang==="en");
  renderItemList();render();
  renderPlan();
}
function selectItem(id){
  if(!items.has(id))return;
  selected=id;el("quantity").value=1;el("search").value="";el("suggestions").innerHTML="";
  renderItemList();render();
}
function renderItemList(){
  var q=el("search").value.trim().toLowerCase();
  var found=Array.from(items.values()).filter(function(x){return !q||itemName(x.id).toLowerCase().indexOf(q)!==-1||x.name.toLowerCase().indexOf(q)!==-1});
  el("itemCount").textContent=found.length+" "+t("count");
  el("itemList").innerHTML=found.map(function(x){
    return '<button type="button" class="item-option '+(x.id===selected?"selected-item":"")+'" data-id="'+x.id+'"><span class="item-option-icon">'+iconHTML(x.id)+'</span><span>'+itemName(x.id)+'</span></button>';
  }).join("");
  el("itemList").querySelectorAll(".item-option").forEach(function(n){n.onclick=function(){selectItem(n.dataset.id)}});
}
function renderSuggestions(){
  var q=el("search").value.trim().toLowerCase(),box=el("suggestions");
  renderItemList();
  if(!q){box.innerHTML="";return}
  var found=Array.from(items.values()).filter(function(x){return itemName(x.id).toLowerCase().indexOf(q)!==-1||x.name.toLowerCase().indexOf(q)!==-1}).slice(0,8);
  box.innerHTML=found.map(function(x){return '<button type="button" class="suggestion" data-id="'+x.id+'">'+iconHTML(x.id)+' &nbsp;'+itemName(x.id)+'</button>'}).join("");
  box.querySelectorAll(".suggestion").forEach(function(n){n.onclick=function(){selectItem(n.dataset.id)}});
}
function render(){
  var item=items.get(selected),qty=Math.max(1,Math.min(999999,parseInt(el("quantity").value)||1)),recursive=el("recursive").checked,alt=el("alt").checked,rs=recipeFor(selected),first=rs[0],c=calculate(selected,qty,recursive,alt);
  el("quantity").value=qty;
  el("selectedIcon").innerHTML=iconHTML(selected);el("selectedName").textContent=itemName(selected);
  el("selectedMeta").textContent=first?t("craftingRecipe")+" · "+(first.produces||1)+" "+t("perRecipe"):t("noRecipe");
  el("resultTitle").textContent=itemName(selected)+" × "+fmt(qty);el("recipeOutput").textContent=first?t("produces")+" "+fmt(first.produces||1):t("noRecipeShort");
  el("summary").innerHTML='<div class="stat"><b>'+fmt(c.batches)+'</b> '+t("recipe")+'</div><div class="stat"><b>'+fmt(c.totals.size)+'</b> '+t("materials")+'</div><div class="stat">'+(recursive?t("complete"):t("direct"))+'</div>';
  var entries=Array.from(c.totals.entries()).sort(function(a,b){return b[1]-a[1]});
  el("materials").innerHTML=entries.length?entries.map(function(pair){var id=pair[0],n=pair[1];return '<div class="material"><div class="material-left"><div class="item-icon">'+iconHTML(id)+'</div><div><div class="material-name">'+itemName(id)+'</div><div class="material-type">'+(recipeFor(id).length?t("craftable"):t("raw"))+'</div></div></div><b>'+fmt(n)+'</b></div>'}).join(""):'<div class="empty">'+t("noIngredients")+"</div>";
  renderTree(qty,recursive,alt);
}
function buildTree(id,n,recursive,useAlt,path,depth){
  var rr=recipeFor(id),node={id:id,qty:n,children:[]};
  if(!rr.length||path.indexOf(id)!==-1||(!recursive&&depth>=1))return node;
  var b=Math.ceil(n/(rr[0].produces||1));
  rr.forEach(function(x){var q=useAlt&&x.altQty>0?x.altQty:x.qty;node.children.push(buildTree(x.from,b*q,recursive,useAlt,path.concat(id),depth+1))});
  return node;
}
function treeNodeEl(n,isRoot){
  var wrap=document.createElement("div");wrap.className="tnode";
  if(n.children.length){
    var row=document.createElement("div");row.className="tchildren";
    n.children.forEach(function(c){row.appendChild(treeNodeEl(c,false))});
    wrap.appendChild(row);
  }
  var box=document.createElement("div");
  box.className="tbox "+(recipeFor(n.id).length?"craft":"raw")+(isRoot?" root":"");
  box.innerHTML='<span class="tbox-icon">'+iconHTML(n.id)+'</span><span class="tbox-text"><b>'+itemName(n.id)+'</b><small>× '+fmt(n.qty)+'</small></span>';
  wrap.appendChild(box);
  return wrap;
}
function drawTreeLines(){
  var canvas=el("treeCanvas"),svg=el("treeLines"),cr=canvas.getBoundingClientRect(),d="";
  canvas.querySelectorAll(".tnode").forEach(function(node){
    var kids=node.querySelectorAll(":scope > .tchildren > .tnode > .tbox");
    if(!kids.length)return;
    var p=node.querySelector(":scope > .tbox").getBoundingClientRect(),px=p.left+p.width/2-cr.left,py=p.top-cr.top;
    kids.forEach(function(k){
      var r=k.getBoundingClientRect(),kx=r.left+r.width/2-cr.left,ky=r.bottom-cr.top,my=(ky+py)/2;
      d+="M"+kx+" "+ky+"V"+my+"H"+px+"V"+py;
    });
  });
  svg.setAttribute("width",canvas.scrollWidth);svg.setAttribute("height",canvas.scrollHeight);
  el("treePath").setAttribute("d",d);
}
function renderTree(qty,recursive,alt){
  var root=el("treeRoot");root.innerHTML="";
  root.appendChild(treeNodeEl(buildTree(selected,qty,recursive,alt,[],0),true));
  drawTreeLines();
}
function addCurrent(){
  var qty=Math.max(1,parseInt(el("quantity").value)||1),i=plan.find(function(x){return x.id===selected});
  if(i)i.qty+=qty;else plan.push({id:selected,qty:qty});renderPlan();
}
function renderPlan(){
  el("planItems").innerHTML=plan.length?plan.map(function(p,i){return '<div class="plan-row"><span>'+iconHTML(p.id)+' &nbsp;'+itemName(p.id)+' × '+fmt(p.qty)+'</span><button type="button" data-i="'+i+'">'+t("remove")+"</button></div>"}).join(""):'<div class="empty">'+t("emptyPlan")+"</div>";
  el("planItems").querySelectorAll("button").forEach(function(b){b.onclick=function(){plan.splice(+b.dataset.i,1);renderPlan()}});
  if(!plan.length){el("planTotals").innerHTML="";return}
  var totals=new Map();
  function add(m,k,n){m.set(k,(m.get(k)||0)+n)}
  plan.forEach(function(p){var c=calculate(p.id,p.qty,true,el("alt").checked);c.totals.forEach(function(n,id){add(totals,id,n)})});
  el("planTotals").innerHTML=Array.from(totals.entries()).sort(function(a,b){return b[1]-a[1]}).map(function(pair){return '<div class="plan-total"><b>'+iconHTML(pair[0])+' '+fmt(pair[1])+'</b><span>'+itemName(pair[0])+'</span></div>'}).join("");
}
window.addEventListener("resize",drawTreeLines);
el("search").addEventListener("input",renderSuggestions);
el("quantity").addEventListener("input",render);
el("minus").onclick=function(){el("quantity").value=Math.max(1,(+el("quantity").value||1)-1);render()};
el("plus").onclick=function(){el("quantity").value=Math.min(999999,(+el("quantity").value||1)+1);render()};
el("recursive").onchange=render;
el("alt").onchange=function(){render();renderPlan()};
el("addPlan").onclick=addCurrent;
el("clearPlan").onclick=function(){plan=[];renderPlan()};
el("langPT").onclick=function(){lang="pt-BR";applyLanguage()};
el("langEN").onclick=function(){lang="en";applyLanguage()};
el("copy").onclick=async function(){
  var c=calculate(selected,+el("quantity").value,el("recursive").checked,el("alt").checked),lines=[itemName(selected)+" × "+el("quantity").value,""];
  c.totals.forEach(function(n,id){lines.push("- "+itemName(id)+": "+fmt(n))});
  try{await navigator.clipboard.writeText(lines.join("\n"));el("copy").textContent=t("copied");setTimeout(function(){el("copy").textContent=t("copyMaterialsDefault")},1200)}catch(e){}
};
I18N["pt-BR"].craftingRecipe="Receita de fabricação";
I18N.en.craftingRecipe="Crafting recipe";
el("dataVersion").textContent="Dados: "+D.version+" · "+t("chooseItem");
applyLanguage();