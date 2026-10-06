// Dados de tipos de sangue e do Homogeneizador de Sangue (V Rising 1.1+).
// Fonte: páginas de patch notes da Stunlock Studios e guias públicos da comunidade
// (V Rising Wiki/Fandom, Fextralife, GameLeap, TheGamer, ProGameGuides, exitlag, onelifegaming).
// Percentuais variam um pouco entre fontes conforme a versão do patch — tratar como referência,
// não como valor cravado. Tiers seguem o padrão do jogo: T1 ≥1%, T2 ≥30%, T3 ≥60%, T4 ≥90%, T5 =100%.
window.VR_BLOOD = {
homogenizer: {
  unlock: { pt: "Derrotar o chefe Lucile, a Alquimista do Veneno, em Oakveil Woodlands", en: "Defeat the boss Lucile the Venom Alchemist, in Oakveil Woodlands" },
  cost: [
    {icon:"🩸", qty:1, name:{pt:"Essência de Sangue Primordial", en:"Primal Blood Essence"}},
    {icon:"🔩", qty:8, name:{pt:"Lingote de Prata Negra", en:"Dark Silver Ingot"}},
    {icon:"🪟", qty:8, name:{pt:"Vidro", en:"Glass"}},
    {icon:"🧪", qty:32, name:{pt:"Seiva de Veneno", en:"Venom Sap"}}
  ],
  howItWorks: {
    pt: "Insira um sangue primário e um secundário. O resultado mantém todos os bônus do sangue primário, ganha automaticamente o Tier 4 do secundário se ele tiver 90%+ de qualidade, e deixa você escolher 1 bônus (T1, T2 ou T3) do secundário para levar junto. O frasco secundário é consumido no processo.",
    en: "Insert a primary and a secondary blood. The result keeps every bonus from the primary blood, automatically gains the secondary's Tier 4 if it's 90%+ quality, and lets you pick 1 bonus (T1, T2 or T3) from the secondary to carry over. The secondary potion is consumed in the process."
  }
},
types: [
  {id:"brute", icon:"🪓", core:true,
    name:{pt:"Brute",en:"Brute"},
    source:{pt:"Bandidos e combatentes corpo a corpo humanos",en:"Bandits and human melee fighters"},
    focus:{pt:"Sustentação corpo a corpo",en:"Melee sustain"},
    tiers:[
      {pt:"7,5–15% de roubo de vida no ataque primário",en:"7.5–15% life leech on primary attack"},
      {pt:"7,5–15% mais velocidade de ataque primário, +1 nível de equipamento",en:"7.5–15% increased primary attack speed, +1 gear level"},
      {pt:"15–30% mais cura recebida; cura 4% da vida do inimigo com o golpe fatal",en:"15–30% increased healing received; heal 4% of victim's health on killing blow"},
      {pt:"Chance de ganhar +20% velocidade e +25% poder físico por alguns segundos ao se curar",en:"Chance to gain +20% move speed and +25% physical power for a few seconds on healing"},
      {pt:"Todos os efeitos acima +30%",en:"All above effects +30%"}
    ]},
  {id:"warrior", icon:"🛡️", core:true,
    name:{pt:"Warrior",en:"Warrior"},
    source:{pt:"Soldados e guerreiros humanos",en:"Human soldiers and warriors"},
    focus:{pt:"Tanque / dano físico sustentado",en:"Tank / sustained physical damage"},
    tiers:[
      {pt:"10–20% mais poder físico",en:"10–20% increased physical power"},
      {pt:"8–25% redução de recarga de habilidades de arma",en:"8–25% reduced weapon skill cooldown"},
      {pt:"7,5–15% redução de dano recebido",en:"7.5–15% reduced damage taken"},
      {pt:"15% de chance de aparar um ataque, reduzindo 50% do dano",en:"15% chance to parry an attack, reducing damage taken by 50%"},
      {pt:"Todos os efeitos acima +30%",en:"All above effects +30%"}
    ]},
  {id:"rogue", icon:"🗡️", core:true,
    name:{pt:"Rogue",en:"Rogue"},
    source:{pt:"Assassinos, arqueiros e batedores",en:"Assassins, archers and scouts"},
    focus:{pt:"Crítico / mobilidade / PvP",en:"Crit / mobility / PvP"},
    tiers:[
      {pt:"10–20% de chance de crítico em ataques com arma",en:"10–20% chance to critical strike on weapon attacks"},
      {pt:"8–15% mais velocidade de movimento",en:"8–15% increased movement speed"},
      {pt:"12–25% redução de recarga do Véu; crítico garantido no próximo ataque após usá-lo",en:"12–25% reduced Veil cooldown; guaranteed crit on next attack after using it"},
      {pt:"50% de chance no crítico de expor a armadura do alvo (+15% de dano recebido por 4s)",en:"50% chance on crit to expose victim's armor (+15% damage taken for 4s)"},
      {pt:"Todos os efeitos acima +30%",en:"All above effects +30%"}
    ]},
  {id:"scholar", icon:"📖", core:true,
    name:{pt:"Scholar",en:"Scholar"},
    source:{pt:"Conjuradores, freiras e magos",en:"Spellcasters, nuns and mages"},
    focus:{pt:"Poder de magia / recarga",en:"Spell power / cooldowns"},
    tiers:[
      {pt:"10–20% mais poder de magia",en:"10–20% increased spell power"},
      {pt:"8–25% redução de recarga de magias",en:"8–25% reduced spell cooldown"},
      {pt:"5–10% de roubo de vida em magias",en:"5–10% spell life leech"},
      {pt:"15–20% de chance de resetar a recarga da magia ao conjurar",en:"15–20% chance to reset spell cooldown on cast"},
      {pt:"Todos os efeitos acima +25–30%",en:"All above effects +25–30%"}
    ]},
  {id:"worker", icon:"⛏️", core:true,
    name:{pt:"Worker",en:"Worker"},
    source:{pt:"Camponeses e trabalhadores",en:"Peasants and workers"},
    focus:{pt:"Coleta de recursos",en:"Resource gathering"},
    tiers:[
      {pt:"10–30% mais rendimento de recursos",en:"10–30% increased resource yield"},
      {pt:"15–25% mais dano contra nós de recurso",en:"15–25% increased damage vs. resource nodes"},
      {pt:"10–20% mais velocidade de galope montado",en:"10–20% increased mount gallop speed"},
      {pt:"3% de chance de destruir um recurso na hora e ganhar surto de velocidade",en:"3% chance to instantly destroy a resource node and trigger a burst of speed"},
      {pt:"Todos os efeitos acima +30%",en:"All above effects +30%"}
    ]},
  {id:"creature", icon:"🐺", core:true,
    name:{pt:"Creature",en:"Creature"},
    source:{pt:"Animais grandes (lobos, ursos etc.)",en:"Large animals (wolves, bears, etc.)"},
    focus:{pt:"Exploração / sobrevivência",en:"Exploration / survival"},
    tiers:[
      {pt:"3–15% mais velocidade de movimento",en:"3–15% increased movement speed"},
      {pt:"+10–25 de resistência solar",en:"+10–25 sun resistance rating"},
      {pt:"8–20% redução de dano",en:"8–20% damage reduction"},
      {pt:"50–150% mais regeneração de vida",en:"50–150% increased health regeneration"},
      {pt:"Todos os efeitos acima +25–30%",en:"All above effects +25–30%"}
    ]},
  {id:"mutant", icon:"☣️", core:false,
    name:{pt:"Mutant",en:"Mutant"},
    source:{pt:"Criaturas mutantes de Gloomrot",en:"Mutant creatures in Gloomrot"},
    focus:{pt:"Resiliência / transformações",en:"Resilience / shapeshifting"},
    tiers:[
      {pt:"25–50% menos drenagem do reservatório de sangue",en:"25–50% reduced blood pool drain rate"},
      {pt:"+10–25 em todas as resistências",en:"+10–25 to all resistance ratings"},
      {pt:"10–20% mais velocidade enquanto transformado",en:"10–20% increased movement speed while shapeshifted"},
      {pt:"40% de chance de converter o alvo abatido com mordida em um mutante aliado",en:"40% chance to convert the victim into a mutant ally after a killing bite"},
      {pt:"Todos os efeitos acima +30%",en:"All above effects +30%"}
    ]},
  {id:"draculin", icon:"🦇", core:false,
    name:{pt:"Draculin",en:"Draculin"},
    source:{pt:"Cultistas vampíricos, nas Ruínas de Mortium",en:"Vampire cultists, in the Ruins of Mortium"},
    focus:{pt:"Híbrido de magia e mordida",en:"Spell/bite hybrid"},
    tiers:[
      {pt:"10–20% mais velocidade de movimento durante a noite",en:"10–20% increased movement speed at night"},
      {pt:"10–20% mais dano contra inimigos abaixo de 30% de vida",en:"10–20% increased damage against enemies below 30% health"},
      {pt:"40–80% mais cura recebida do Curar Sangue (Blood Mend)",en:"40–80% increased healing received from Blood Mend"},
      {pt:"+1 carga de Mordida; cura 5% da vida máxima ao abater com mordida",en:"+1 Bite charge; heal 5% of max health on a killing bite"},
      {pt:"Todos os efeitos acima +25%",en:"All above effects +25%"}
    ]},
  {id:"corrupted", icon:"🩸", core:false, risky:true,
    name:{pt:"Corrupted",en:"Corrupted"},
    source:{pt:"Inimigos corrompidos de Oakveil Woodlands",en:"Corrupted enemies in Oakveil Woodlands"},
    focus:{pt:"Alto risco / alta recompensa",en:"High risk / high reward"},
    tiers:[
      {pt:"25–50% menos dano de ataques corrompidos e +5% roubo de vida, mas +10% mais dano de todas as outras fontes",en:"25–50% reduced damage from corrupted attacks and +5% life leech, but +10% increased damage from all other sources"},
      {pt:"Reduz em 4–8 o máximo de cargas de corrupção vil, mas +50–100% na taxa de drenagem de sangue",en:"Reduces max vile corruption stacks by 4–8, but +50–100% increased blood drain rate"},
      {pt:"+8–18% velocidade de movimento e ataque, mas 25% de chance de erupção (enraizado 2s) ao levar dano",en:"+8–18% movement and attack speed, but 25% chance to erupt and snare yourself for 2s when taking damage"},
      {pt:"+15 de ganho de carga de magia/arma, mas 30% de chance de invocar uma sombra hostil ao usar uma habilidade",en:"+15 spell/weapon charge gain, but 30% chance to spawn a hostile shadow when using an ability"},
      {pt:"Todos os efeitos acima +20%, e aumenta o teto máximo dos bônus de sangue",en:"All above effects +20%, and increases the maximum blood-bonus cap"}
    ]}
],
combos: [
  {primary:"scholar", secondary:"rogue", pick:{pt:"T3 — redução de recarga do Véu",en:"T3 — Veil cooldown reduction"}, tag:"spell",
    note:{pt:"Rotação de magia completa com uma via de fuga rápida. Resolve o maior ponto fraco de um build puro de Scholar: mobilidade.",en:"A full spell rotation with a fast escape tool. Fixes the biggest weakness of a pure Scholar build: mobility."}},
  {primary:"rogue", secondary:"warrior", pick:{pt:"T4 — aparar (chance de parry)",en:"T4 — parry chance"}, tag:"pvp",
    note:{pt:"Em PvP, apara o golpe do oponente e ainda expõe a armadura dele no crítico seguinte — dois multiplicadores de dano empilhados.",en:"In PvP, parry the opponent's hit and still expose their armor on the next crit — two damage multipliers stacked."}},
  {primary:"brute", secondary:"scholar", pick:{pt:"T3 — roubo de vida em magia",en:"T3 — spell life leech"}, tag:"sustain",
    note:{pt:"Sustentação dobrada: vida de volta no corpo a corpo e nas magias. Bom para limpar hordes sem precisar recuar.",en:"Double sustain: lifesteal from melee and from spells. Good for clearing hordes without retreating."}},
  {primary:"warrior", secondary:"brute", pick:{pt:"T2 — velocidade de ataque primário",en:"T2 — primary attack speed"}, tag:"tank",
    note:{pt:"Tanque que também bate rápido — mantém a redução de dano e o parry do Warrior, ganha ritmo de ataque do Brute.",en:"A tank that also hits fast — keeps Warrior's damage reduction and parry, gains Brute's attack tempo."}},
  {primary:"worker", secondary:"creature", pick:{pt:"T3 — redução de dano",en:"T3 — damage reduction"}, tag:"farm",
    note:{pt:"Farm mais seguro: rendimento de recurso do Worker com a sobrevivência extra do Creature contra os bichos no caminho.",en:"Safer farming: Worker's resource yield plus Creature's extra survivability against wildlife along the way."}},
  {primary:"rogue", secondary:"scholar", pick:{pt:"T4 — chance de resetar recarga de magia",en:"T4 — chance to reset spell cooldown"}, tag:"hybrid",
    note:{pt:"Build híbrida: dano crítico físico do Rogue com uma chance extra de repetir uma magia forte.",en:"Hybrid build: Rogue's physical crit damage with an extra chance to repeat a strong spell."}}
]
};
