# V Rising Crafting Calculator

Calculadora web para somar materiais de crafting do V Rising.

## Recursos
- Busca de itens
- Quantidade desejada
- Ingredientes diretos
- Cadeia recursiva até matérias-primas
- Arredondamento por lotes
- Receita econômica opcional
- Lista de fabricação com soma consolidada
- Ícones dos materiais (V Rising Wiki), com emoji como reserva quando o ícone não existe ou não carrega
- Árvore visual de fabricação (linhas ligando cada item aos ingredientes)
- Interface responsiva
- Site estático, pronto para GitHub Pages

## Dados
O projeto começa com um grafo comunitário de materiais de V Rising 1.1. Ele é um ponto de partida e deve ser revisado/atualizado antes de ser tratado como referência completa de uma versão específica.

A referência pública atual do V Rising Database informa a versão v1.1.13.0-r99712-b17, atualizada em 5 de setembro de 2026:
https://vrising.gaming.tools/

Os ícones são carregados da V Rising Wiki (vrising.wiki.spellsandguns.com, texto sob CC BY-SA 4.0). V Rising e seus assets, incluindo os ícones, pertencem à Stunlock Studios. Este é um projeto de fã e não é afiliado à Stunlock Studios.

## GitHub Pages
Em Settings → Pages, selecione Deploy from a branch, branch main e pasta /(root).

## Arquivos
index.html — interface
styles.css — tema
data.js — itens e receitas
icons.js — mapa de ícones dos materiais
app.js — motor de cálculo

## Próximas etapas
1. Completar a base com todas as receitas da versão atual.
2. Adicionar ícones dos itens.
3. Adicionar estações e desbloqueios.
4. Suportar múltiplas variantes de receita.
5. Adicionar importação/exportação da lista de farm.
