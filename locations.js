// Mapa de recursos: onde farmar cada material bruto, por REGIÃO (esquema aproximado, não é o mapa oficial).
// Fontes: páginas de região da V Rising Wiki (Fandom), guias de recursos por região (Deltia's Gaming),
// guias de Quartzo, Ferro, Prata e Bateria (TheGamer, Dexerto, Prima Games, GamePressure).
// Cada região lista os locais PRINCIPAIS, não todos. Itens sem localização confirmada ficam de fora
// (Fibra Vegetal, Pele Rústica, Joia de Ouro, Serragem, Pó de Pedra).
// Posições e tamanhos (x, y, w, h) são em % do quadro do mapa.
window.VR_MAP={
regions:[
{id:"oakveil",name:"Oakveil Woodlands",short:"Oakveil",x:0,y:0,w:28,h:25},
{id:"gloomrot_n",name:"Gloomrot North",short:"Gloomrot N",x:29.5,y:0,w:39,h:22},
{id:"cursed",name:"Cursed Forest",short:"Cursed Forest",x:70,y:0,w:30,h:29},
{id:"gloomrot_s",name:"Gloomrot South",short:"Gloomrot S",x:29.5,y:24,w:39,h:20},
{id:"silverlight",name:"Silverlight Hills",short:"Silverlight",x:0,y:27,w:28,h:44},
{id:"dunley",name:"Dunley Farmlands",short:"Dunley",x:29.5,y:46,w:39,h:27},
{id:"mortium",name:"Ruins of Mortium",short:"Mortium",x:70,y:31,w:30,h:23},
{id:"hallowed",name:"Hallowed Mountains",short:"Hallowed",x:70,y:56,w:30,h:44},
{id:"farbane",name:"Farbane Woods",short:"Farbane",x:0,y:75,w:68.5,h:25}
],
items:{
Wood:["farbane"],Stone:["farbane"],Bone:["farbane"],CopperOre:["farbane"],
SulphurOre:["farbane","gloomrot_s"],
IronOre:["dunley","cursed"],
Quartz:["dunley","silverlight","cursed"],
SilverOre:["silverlight"],
Cotton:["dunley"],
GhostCrystal:["cursed"],Silkworm:["cursed"],PristineHide:["cursed"],CursedWood:["cursed"],
BatHide:["mortium"],
ThickHide:["hallowed"],HallowWood:["hallowed"],
MutantGrease:["gloomrot_n","gloomrot_s"],TechScrap:["gloomrot_n","gloomrot_s"],ChargedBattery:["gloomrot_n","gloomrot_s"],
Emery:["oakveil"],CorruptedOak:["oakveil"],
Gems:["farbane","dunley","silverlight","mortium","cursed","gloomrot_s","oakveil"]
}
};
