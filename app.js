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
fullChain:"🔗 Calcular toda a cadeia de fabricação",fullChainHelp:"Calcula desde o item final até os recursos que você precisa coletar.",fullChainExample:"Ex.: Vidro → Quartzo necessário.",economicRecipe:"📉 Usar a receita que economiza materiais",
economicHelp:"Usa uma receita alternativa quando ela exigir menos materiais.",economicExample:"Ex.: receita normal 20 → alternativa 15, quando disponível.",addList:"＋ Adicionar à lista",copyMaterials:"Copiar materiais",result:"RESULTADO",
productionList:"LISTA DE PRODUÇÃO",myList:"Minha lista de fabricação",clear:"Limpar",
emptyPlan:"Adicione itens à lista para somar tudo em uma única lista de farm.",direct:"Somente ingredientes diretos",
complete:"Cadeia completa",craftable:"fabricável",raw:"matéria-prima",recipe:"receita(s)",materials:"material(is)",
produces:"Produz",perRecipe:"por receita",noRecipe:"Matéria-prima / sem receita",noRecipeShort:"Sem receita",
noIngredients:"Este item não possui ingredientes cadastrados.",remove:"remover",copied:"✓ Copiado",
copyMaterialsDefault:"Copiar materiais",count:"itens",footer:"Fan-made project · V Rising is property of Stunlock Studios · Icons: V Rising Wiki",
chooseItem:"Escolha um item na lista ou pela busca.",
farmEyebrow:"MODO FARM",farmTitle:"O que preciso farmar?",farmHint:"Mostra somente o que falta depois de descontar seu inventário.",inventoryEyebrow:"MEU ESTOQUE",inventoryTitle:"O que eu já tenho para fabricar?",inventoryHint:"Mostra somente os materiais necessários para o item selecionado. Informe quanto você já possui.",inventoryNeed:"Para fabricar",inventoryHave:"Tenho",inventoryNeedTotal:"Preciso",inventoryMissing:"Falta",inventoryComplete:"Completo",inventoryNone:"Nenhum material necessário para este item.",inventoryRaw:"Selecione um item fabricável para controlar os materiais.",zero:"Zerar",saveProject:"💾 Salvar projeto",exportData:"⬇ Exportar",importData:"⬆ Importar",
mapEyebrow:"MAPA DE RECURSOS",mapTitle:"Onde farmar os materiais",mapHint:"Regiões onde ficam os materiais do item escolhido. Esquema aproximado, não é o mapa oficial.",mapLink:"Mapa interativo ↗",mapNoLoc:"Local ainda não mapeado",mapEmpty:"Nenhum material deste item tem local mapeado ainda.",mapAria:"Esquema aproximado do mapa de Vardoran",
treeEyebrow:"ÁRVORE DE FABRICAÇÃO",treeTitle:"Do item final aos materiais",treeHint:"Cada linha liga um item aos ingredientes usados para fabricá-lo.",
viewCalculator:"⚙ Calculadora",viewTree:"⌘ Árvore",viewMap:"⌖ Mapa",viewFarm:"⛏ Farm",viewInventory:"▣ Meu estoque",viewPlan:"☷ Minha lista",filterAll:"Todos",filterCraftable:"Fabricáveis",filterRaw:"Matérias-primas",filterFavorite:"★ Favoritos",filterMetal:"Metais",filterTextile:"Têxteis",filterAlchemy:"Alquimia",saved:"✓ Projeto salvo",exported:"✓ Dados exportados",imported:"✓ Dados importados"
},
"en":{
eyebrow:"MATERIAL CALCULATOR",heroTitle:"How much do I need to farm?",
heroText:"Choose an item from the list or use search, set the quantity, and see direct materials or the full chain down to raw materials.",
itemToCraft:"Item to craft",searchPlaceholder:"Search item...",itemList:"Item list",desiredQuantity:"Desired quantity",
fullChain:"🔗 Calculate the full crafting chain",fullChainHelp:"Calculates from the final item down to the resources you need to gather.",fullChainExample:"Example: Glass → required Quartz.",economicRecipe:"📉 Use the material-saving recipe",
economicHelp:"Uses an alternative recipe when it requires fewer materials.",economicExample:"Example: normal recipe 20 → alternative 15, when available.",addList:"＋ Add to list",copyMaterials:"Copy materials",result:"RESULT",
productionList:"PRODUCTION LIST",myList:"My crafting list",clear:"Clear",
emptyPlan:"Add items to the list to combine everything into one farming list.",direct:"Direct ingredients only",
complete:"Full chain",craftable:"craftable",raw:"raw material",recipe:"recipe(s)",materials:"material(s)",
produces:"Produces",perRecipe:"per recipe",noRecipe:"Raw material / no recipe",noRecipeShort:"No recipe",
noIngredients:"This item has no registered ingredients.",remove:"remove",copied:"✓ Copied",
copyMaterialsDefault:"Copy materials",count:"items",footer:"Fan-made project · V Rising is property of Stunlock Studios · Icons: V Rising Wiki",
chooseItem:"Choose an item from the list or search.",
farmEyebrow:"FARM MODE",farmTitle:"What do I need to farm?",farmHint:"Shows only what is missing after subtracting your inventory.",inventoryEyebrow:"MY STOCK",inventoryTitle:"What do I already have to craft it?",inventoryHint:"Shows only the materials needed for the selected item. Enter how much you already have.",inventoryNeed:"To craft",inventoryHave:"Have",inventoryNeedTotal:"Need",inventoryMissing:"Missing",inventoryComplete:"Complete",inventoryNone:"No materials are required for this item.",inventoryRaw:"Select a craftable item to track its materials.",zero:"Reset",saveProject:"💾 Save project",exportData:"⬇ Export",importData:"⬆ Import",
mapEyebrow:"RESOURCE MAP",mapTitle:"Where to farm the materials",mapHint:"Regions where the chosen item's materials are found. Approximate schematic, not the official map.",mapLink:"Interactive map ↗",mapNoLoc:"Location not mapped yet",mapEmpty:"None of this item's materials have a mapped location yet.",mapAria:"Approximate schematic of the Vardoran map",
treeEyebrow:"CRAFTING TREE",treeTitle:"From final item to materials",treeHint:"Each line links an item to the ingredients used to craft it.",
viewCalculator:"⚙ Calculator",viewTree:"⌘ Tree",viewMap:"⌖ Map",viewFarm:"⛏ Farm",viewInventory:"▣ My stock",viewPlan:"☷ My list",filterAll:"All",filterCraftable:"Craftable",filterRaw:"Raw materials",filterFavorite:"★ Favorites",filterMetal:"Metals",filterTextile:"Textiles",filterAlchemy:"Alchemy",saved:"✓ Project saved",exported:"✓ Data exported",imported:"✓ Data imported"
}
};
let lang="pt-BR";
let selected="SludgeFilledCanister",plan=[];
let activeFilter="all";
let inventory=JSON.parse(localStorage.getItem("vr_inventory")||"{}");
let favorites=JSON.parse(localStorage.getItem("vr_favorites")||"[]");
let recent=JSON.parse(localStorage.getItem("vr_recent")||"[]");
plan=JSON.parse(localStorage.getItem("vr_plan")||"[]");
let treeScale=1;

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
function categoryOf(id){
  if(/Iron|Copper|Silver|Gold|DarkSilver|Ingot|Coin|Ore|Radium|PowerCore|Battery/.test(id))return "metal";
  if(/Thread|Cloth|Leather|Hide|Silk|Yarn|Cotton|Carpet|Weave/.test(id))return "textile";
  if(/Grease|Sludge|Sulphur|Venom|Oil|Glass|Ember|Scourge|Spectral|Dust|Onyx/.test(id))return "alchemy";
  return recipeFor(id).length?"craftable":"raw";
}
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
  document.querySelectorAll("[data-i18n-aria]").forEach(function(n){n.setAttribute("aria-label",t(n.dataset.i18nAria))});
  el("langPT").classList.toggle("active",lang==="pt-BR");el("langEN").classList.toggle("active",lang==="en");
  renderItemList();render();
  renderPlan();
}
function selectItem(id){
  if(!items.has(id))return;
  selected=id;el("quantity").value=1;el("search").value="";el("suggestions").innerHTML="";
recent=[id].concat(recent.filter(function(x){return x!==id})).slice(0,8);localStorage.setItem("vr_recent",JSON.stringify(recent));
  renderItemList();render();
}
function renderItemList(){
  var q=el("search").value.trim().toLowerCase();
  var found=Array.from(items.values()).filter(function(x){
  var matches=!q||itemName(x.id).toLowerCase().indexOf(q)!==-1||x.name.toLowerCase().indexOf(q)!==-1;
  var type=recipeFor(x.id).length?"craftable":"raw";
  var cat=categoryOf(x.id),fav=favorites.indexOf(x.id)!==-1;
  var matchesFilter=
    activeFilter==="all" ||
    (activeFilter==="craftable" && type==="craftable") ||
    (activeFilter==="raw" && type==="raw") ||
    (activeFilter==="favorite" && fav) ||
    (activeFilter===cat);
  return matches && matchesFilter;
});
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
  var full=first?calculate(selected,qty,true,alt).totals:new Map([[selected,qty]]);
  renderMap(full);
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
el("treeCanvas").style.transform="scale("+treeScale+")";el("treeZoom").textContent=Math.round(treeScale*100)+"%";
}
function renderTree(qty,recursive,alt){
  var root=el("treeRoot");root.innerHTML="";
  root.appendChild(treeNodeEl(buildTree(selected,qty,recursive,alt,[],0),true));
  drawTreeLines();
}
var MAPDATA=window.VR_MAP,regionById=new Map(MAPDATA.regions.map(function(r){return [r.id,r]}));
function initMap(){
  el("mapRegions").innerHTML=MAPDATA.regions.map(function(r){
    return '<div class="rg" data-region="'+r.id+'" style="left:'+r.x+'%;top:'+r.y+'%;width:'+r.w+'%;height:'+r.h+'%"><div class="rg-head"><span class="rg-name">'+r.name+'</span><span class="rg-count"></span></div><div class="rg-icons"></div></div>';
  }).join("")+'<span class="rg-compass">N ↑</span>';
}
function focusRegions(ids){
  document.querySelectorAll("#mapRegions .rg").forEach(function(n){
    var hit=!!ids&&ids.indexOf(n.dataset.region)!==-1;
    n.classList.toggle("focus",hit);n.classList.toggle("fade",!!ids&&!hit);
  });
}
function renderMap(totals){
  var entries=Array.from(totals.entries()).sort(function(a,b){return b[1]-a[1]}),byRegion={},located=0;
  entries.forEach(function(pair){
    var regs=MAPDATA.items[pair[0]]||[];
    if(regs.length)located++;
    regs.forEach(function(rid){(byRegion[rid]=byRegion[rid]||[]).push(pair)});
  });
  document.querySelectorAll("#mapRegions .rg").forEach(function(n){
    var list=byRegion[n.dataset.region]||[];
    n.classList.toggle("on",list.length>0);n.classList.toggle("off",!list.length);
    n.querySelector(".rg-count").textContent=list.length||"";
    n.querySelector(".rg-icons").innerHTML=list.map(function(p){
      return '<span class="rg-ico" title="'+itemName(p[0])+' × '+fmt(p[1])+'">'+iconHTML(p[0])+'</span>';
    }).join("");
  });
  var box=el("mapList");
  if(!located){box.innerHTML='<div class="empty">'+t("mapEmpty")+'</div>';focusRegions(null);return}
  box.innerHTML=entries.map(function(pair){
    var id=pair[0],regs=MAPDATA.items[id]||[];
    var chips=regs.length?regs.map(function(rid){return '<span class="chip">'+regionById.get(rid).short+'</span>'}).join(""):'<span class="chip muted">'+t("mapNoLoc")+'</span>';
    return '<div class="loc-row" tabindex="0" data-id="'+id+'"><div class="item-icon">'+iconHTML(id)+'</div><div class="loc-main"><div class="loc-name">'+itemName(id)+' <b>× '+fmt(pair[1])+'</b></div><div class="loc-regions">'+chips+'</div></div></div>';
  }).join("");
  box.querySelectorAll(".loc-row").forEach(function(row){
    var ids=MAPDATA.items[row.dataset.id]||[];
    function on(){if(ids.length)focusRegions(ids)}function off(){focusRegions(null)}
    row.addEventListener("mouseenter",on);row.addEventListener("focus",on);
    row.addEventListener("mouseleave",off);row.addEventListener("blur",off);
  });
}
function addCurrent(){
  var qty=Math.max(1,parseInt(el("quantity").value)||1),i=plan.find(function(x){return x.id===selected});
  if(i)i.qty+=qty;else plan.push({id:selected,qty:qty});localStorage.setItem("vr_plan",JSON.stringify(plan));renderPlan();
}
function activateView(view){
  document.querySelectorAll(".view-btn[data-view]").forEach(function(b){
    b.classList.toggle("active",b.dataset.view===view);
  });
  var target=null;
  if(view==="calculator") target=document.querySelector(".calculator");
  else if(view==="tree") target=document.querySelector("#mainTree");
  else if(view==="map") target=document.querySelector("#resourceMap");
  else if(view==="farm") target=document.querySelector("#farmPanel");
  else if(view==="inventory") target=document.querySelector("#inventoryPanel");
  else if(view==="plan") target=document.querySelector("#planPanel");
  if(target){
    if(view==="farm") renderFarm();
    if(view==="inventory") renderInventory();
    if(view==="plan") renderPlan();
    if(view==="tree") requestAnimationFrame(drawTreeLines);
    target.scrollIntoView({behavior:"smooth",block:"start"});
  }
}
function renderPlan(){
  el("planItems").innerHTML=plan.length?plan.map(function(p,i){return '<div class="plan-row"><span>'+iconHTML(p.id)+' &nbsp;'+itemName(p.id)+' × '+fmt(p.qty)+'</span><button type="button" data-i="'+i+'">'+t("remove")+"</button></div>"}).join(""):'<div class="empty">'+t("emptyPlan")+"</div>";
  el("planItems").querySelectorAll("button").forEach(function(b){b.onclick=function(){plan.splice(+b.dataset.i,1);localStorage.setItem("vr_plan",JSON.stringify(plan));renderPlan()}});
  if(!plan.length){el("planTotals").innerHTML="";return}
  var totals=new Map();
  function add(m,k,n){m.set(k,(m.get(k)||0)+n)}
  plan.forEach(function(p){var c=calculate(p.id,p.qty,true,el("alt").checked);c.totals.forEach(function(n,id){add(totals,id,n)})});
  el("planTotals").innerHTML=Array.from(totals.entries()).sort(function(a,b){return b[1]-a[1]}).map(function(pair){return '<div class="plan-total"><b>'+iconHTML(pair[0])+' '+fmt(pair[1])+'</b><span>'+itemName(pair[0])+'</span></div>'}).join("");
}
document.querySelectorAll(".view-btn").forEach(function(b){
  b.addEventListener("click",function(){activateView(b.dataset.view)});
});
window.addEventListener("resize",function(){if(document.querySelector(".tree-panel.active"))drawTreeLines()});
el("search").addEventListener("input",renderSuggestions);
el("quantity").addEventListener("input",render);
el("minus").onclick=function(){el("quantity").value=Math.max(1,(+el("quantity").value||1)-1);render()};
el("plus").onclick=function(){el("quantity").value=Math.min(999999,(+el("quantity").value||1)+1);render()};
el("recursive").onchange=render;
el("alt").onchange=function(){render();renderPlan()};
el("addPlan").onclick=addCurrent;
el("clearPlan").onclick=function(){plan=[];localStorage.removeItem("vr_plan");renderPlan()};
el("farmPlan").onclick=function(){if(!plan.length){activateView("plan");return}activateView("farm");renderFarmFromPlan()};
el("langPT").onclick=function(){lang="pt-BR";applyLanguage()};
el("langEN").onclick=function(){lang="en";applyLanguage()};
function saveState(){localStorage.setItem("vr_inventory",JSON.stringify(inventory));localStorage.setItem("vr_favorites",JSON.stringify(favorites))}
function requiredTotals(){var c=calculate(selected,Math.max(1,+el("quantity").value||1),true,el("alt").checked);return c.totals}
function planTotalsMap(){var totals=new Map();function add(k,n){totals.set(k,(totals.get(k)||0)+n)}plan.forEach(function(p){calculate(p.id,p.qty,true,el("alt").checked).totals.forEach(function(n,id){add(id,n)})});return totals}
function renderFarmFromPlan(){var totals=planTotalsMap(),missing=Array.from(totals.entries()).map(function(p){return [p[0],Math.max(0,p[1]-(inventory[p[0]]||0)),inventory[p[0]]||0,p[1]]}).filter(function(p){return p[1]>0});el("farmSummary").innerHTML='<div class="stat"><b>'+fmt(plan.length)+'</b> itens na lista</div><div class="stat"><b>'+fmt(missing.length)+'</b> materiais faltando</div><div class="stat"><b>'+fmt(missing.reduce(function(a,p){return a+p[1]},0))+'</b> unidades para farmar</div>';el("farmMaterials").innerHTML=missing.length?missing.sort(function(a,b){return b[1]-a[1]}).map(function(p){return '<div class="material farm-material"><div class="material-left"><div class="item-icon">'+iconHTML(p[0])+'</div><div><div class="material-name">'+itemName(p[0])+'</div><span class="owned">Tenho '+fmt(p[2])+' · Preciso '+fmt(p[3])+'</span></div></div><b class="shortage">+'+fmt(p[1])+'</b></div>'}).join(""):'<div class="empty">🎉 Você já possui tudo para a lista.</div>'}
function renderInventory(){
  var qty=Math.max(1,+el("quantity").value||1),totals=requiredTotals(),entries=Array.from(totals.entries()).filter(function(p){return p[1]>0});
  var context=el("inventoryContext");
  if(!entries.length){
    context.innerHTML='<div class="inventory-empty-note">'+(recipeFor(selected).length?t("inventoryNone"):t("inventoryRaw"))+'</div>';
    el("inventoryGrid").innerHTML="";
    return;
  }
  context.innerHTML='<div class="inventory-target"><div><span class="inventory-target-label">'+t("inventoryNeed")+'</span><strong>'+itemName(selected)+' × '+fmt(qty)+'</strong></div><span class="inventory-target-badge">'+entries.length+' '+t("materials")+'</span></div>';
  el("inventoryGrid").innerHTML=entries.sort(function(a,b){return b[1]-a[1]}).map(function(pair){
    var id=pair[0],need=pair[1],have=inventory[id]||0,missing=Math.max(0,need-have),complete=missing===0,pct=Math.min(100,need?have/need*100:100);
    return '<div class="inv-item contextual '+(complete?"complete":"")+'"><div class="inv-top"><div class="item-icon">'+iconHTML(id)+'</div><div class="inv-main"><div class="inv-name">'+itemName(id)+'</div><div class="inv-meta">'+t("inventoryNeedTotal")+' <b>'+fmt(need)+'</b> · '+t("inventoryHave")+' <b>'+fmt(have)+'</b></div></div><div class="inv-status">'+(complete?"✓ "+t("inventoryComplete"):"-"+fmt(missing))+'</div></div><div class="inv-progress"><span style="width:'+pct+'%"></span></div><div class="inv-bottom"><span>'+t("inventoryMissing")+': <b>'+fmt(missing)+'</b></span><input class="inv-input" aria-label="'+itemName(id)+'" type="number" min="0" value="'+have+'" data-id="'+id+'"></div></div>';
  }).join("");
  el("inventoryGrid").querySelectorAll(".inv-input").forEach(function(inp){
    inp.oninput=function(){
      inventory[inp.dataset.id]=Math.max(0,+inp.value||0);
      saveState();
      renderInventory();
      renderFarm();
    };
  });
}
function renderFarm(){
  var totals=requiredTotals(),entries=Array.from(totals.entries()).filter(function(p){return p[1]>0});
  var missing=entries.map(function(p){return [p[0],Math.max(0,p[1]-(inventory[p[0]]||0)),inventory[p[0]]||0,p[1]]}).filter(function(p){return p[1]>0});
  el("farmSummary").innerHTML='<div class="stat"><b>'+fmt(entries.length)+'</b> materiais necessários</div><div class="stat"><b>'+fmt(missing.length)+'</b> materiais faltando</div><div class="stat"><b>'+fmt(entries.reduce(function(a,p){return a+p[1]},0))+'</b> unidades totais</div>';
  el("farmMaterials").innerHTML=missing.length?missing.sort(function(a,b){return b[1]-a[1]}).map(function(p){return '<div class="material farm-material"><div class="material-left"><div class="item-icon">'+iconHTML(p[0])+'</div><div><div class="material-name">'+itemName(p[0])+'</div><span class="owned">Tenho '+fmt(p[2])+' · Preciso '+fmt(p[3])+'</span></div></div><b class="shortage">+'+fmt(p[1])+'</b></div>'}).join(""):'<div class="empty">🎉 Você já possui todos os materiais necessários.</div>';
}
function updateFavoriteButton(){
  var on=favorites.indexOf(selected)!==-1;el("favorite").classList.toggle("active",on);el("favorite").textContent=on?"★ Favoritado":"☆ Favoritar";
}
function downloadJSON(filename,data){
  var blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(url)},1000);
}
function toast(message){
  var n=el("appToast");if(!n){n=document.createElement("div");n.id="appToast";document.body.appendChild(n)}
  n.textContent=message;n.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(function(){n.classList.remove("show")},1800);
}
function saveProject(){
  downloadJSON("v-rising-projeto.json",{version:1,selected:selected,quantity:+el("quantity").value||1,recursive:el("recursive").checked,alt:el("alt").checked,plan:plan,inventory:inventory,favorites:favorites,created:new Date().toISOString()});
  toast(t("saved"));
}
function exportAll(){downloadJSON("v-rising-calculadora.json",{version:1,selected:selected,quantity:+el("quantity").value||1,recursive:el("recursive").checked,alt:el("alt").checked,plan:plan,inventory:inventory,favorites:favorites,recent:recent,exported:new Date().toISOString()});toast(t("exported"))}
function importAll(file){var rd=new FileReader();rd.onload=function(){try{var d=JSON.parse(rd.result);inventory=d.inventory||{};favorites=d.favorites||[];plan=d.plan||[];if(d.selected&&items.has(d.selected))selected=d.selected;if(d.quantity)el("quantity").value=d.quantity;saveState();localStorage.setItem("vr_plan",JSON.stringify(plan));renderInventory();renderFarm();renderPlan();render();updateFavoriteButton();toast(t("imported"))}catch(e){alert("Arquivo inválido.")}};rd.readAsText(file)}
el("copy").onclick=async function(){
  var c=calculate(selected,+el("quantity").value,el("recursive").checked,el("alt").checked),lines=[itemName(selected)+" × "+el("quantity").value,""];
  c.totals.forEach(function(n,id){lines.push("- "+itemName(id)+": "+fmt(n))});
  try{await navigator.clipboard.writeText(lines.join("\n"));el("copy").textContent=t("copied");setTimeout(function(){el("copy").textContent=t("copyMaterialsDefault")},1200)}catch(e){}
};
I18N["pt-BR"].craftingRecipe="Receita de fabricação";
I18N.en.craftingRecipe="Crafting recipe";
document.querySelector(".filter-row").addEventListener("click",function(e){
  var b=e.target.closest(".filter");
  if(!b)return;
  activeFilter=b.dataset.filter||"all";
  document.querySelectorAll(".filter-row .filter").forEach(function(x){x.classList.toggle("active",x===b)});
  renderItemList();
});
el("favorite").onclick=function(){var i=favorites.indexOf(selected);if(i===-1)favorites.push(selected);else favorites.splice(i,1);saveState();updateFavoriteButton()};
el("clearInventory").onclick=function(){inventory={};saveState();renderInventory();renderFarm()};
el("clearInventoryFarm").onclick=function(){inventory={};saveState();renderInventory();renderFarm()};
el("copyFarm").onclick=async function(){var totals=requiredTotals(),lines=["FARM — "+itemName(selected)+" × "+el("quantity").value,""];totals.forEach(function(n,id){var f=Math.max(0,n-(inventory[id]||0));if(f)lines.push("- "+itemName(id)+": "+fmt(f))});await navigator.clipboard.writeText(lines.join("\n"));el("copyFarm").textContent="✓ Copiado";setTimeout(function(){el("copyFarm").textContent="📋 Copiar lista de farm"},1200)};
el("markFarmed").onclick=function(){requiredTotals().forEach(function(n,id){inventory[id]=n});saveState();renderInventory();renderFarm()};
el("saveProject").onclick=saveProject;
el("exportData").onclick=exportAll;
el("importData").onclick=function(){el("importFile").click()};
el("importFile").onchange=function(){if(this.files[0])importAll(this.files[0])};
el("compactToggle").onclick=function(){document.body.classList.toggle("compact");var on=document.body.classList.contains("compact");localStorage.setItem("vr_compact",on?"1":"0");this.textContent=on?"● Compacto":"◐ Compacto"};
el("treeMinus").onclick=function(){treeScale=Math.max(.5,Math.round((treeScale-.1)*10)/10);drawTreeLines()};
el("treePlus").onclick=function(){treeScale=Math.min(1.8,Math.round((treeScale+.1)*10)/10);drawTreeLines()};
el("treeReset").onclick=function(){treeScale=1;drawTreeLines()};
document.addEventListener("keydown",function(e){if(e.target.matches("input,textarea"))return;if(e.key==="/"){e.preventDefault();el("search").focus()}if(e.key==="Escape"){el("search").value="";el("suggestions").innerHTML="";renderItemList()}if(e.key==="+"||e.key==="="){el("plus").click()}if(e.key==="-"||e.key==="_"){el("minus").click()}if(e.key==="1")activateView("calculator");if(e.key==="2")activateView("tree");if(e.key==="3")activateView("map");if(e.key==="4")activateView("farm");if(e.key==="5")activateView("inventory");if(e.key==="6")activateView("plan")});
if(localStorage.getItem("vr_compact")==="1"){document.body.classList.add("compact");el("compactToggle").textContent="● Compacto"}
el("dataVersion").textContent="Dados: "+D.version+" · "+t("chooseItem");
renderInventory();renderFarm();updateFavoriteButton();
initMap();
applyLanguage();
