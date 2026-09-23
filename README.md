# V Rising Crafting Calculator

Calculadora web para planejar crafting no **V Rising**, visualizar a cadeia completa de fabricação e organizar os materiais necessários para farm.

> Projeto de fã, sem afiliação com a Stunlock Studios.

## ✦ Recursos

### Calculadora
- Busca de itens
- Filtros por categoria
- Seleção de quantidade
- Ingredientes diretos e cadeia recursiva até matérias-primas
- Arredondamento por lotes
- Receita econômica opcional
- Lista de fabricação com soma consolidada
- Copiar plano de produção

### Árvore de fabricação
- Árvore visual do item final até os materiais
- Conexões entre itens e ingredientes
- Quantidades exibidas nos nós
- Zoom da árvore
- Rolagem horizontal para árvores grandes
- Layout pensado para desktop e mobile
- A árvore é a visualização principal da calculadora

### Meu estoque
- Mostra somente os materiais necessários para o item selecionado
- Controle de quantidade com **slider horizontal**
- Campo numérico para valores exatos
- Slider e campo numérico sincronizados
- Indicador **Preciso → Tenho → Falta**
- Barra de progresso por material
- Atualização imediata do Modo Farm
- Estoque salvo localmente no navegador

### Receitas
- Lista navegável de todos os itens fabricáveis do jogo
- Busca por nome
- Mostra os ingredientes de cada receita, com ícone e quantidade
- Clicar em uma receita abre o item direto na Calculadora

### Sobre o projeto
- Explicação curta do que é a ferramenta e como ela funciona
- Créditos: Stunlock Studios (jogo), V Rising Wiki (ícones), projeto de fã sem vínculo oficial

### Modo Farm
- Materiais consolidados necessários para o item
- Quantidades restantes após considerar o estoque
- Organização visual para facilitar a coleta
- Integração com Meu estoque

### Mapa de recursos
- Esquema aproximado de Vardoran
- Regiões relacionadas aos materiais necessários
- Link para mapa interativo externo

### Interface
- Interface inspirada na atmosfera visual de **V Rising**, mas com arte 100% original
- Dashboard responsivo
- Sidebar vertical fixa no desktop, com 8 seções (Calculadora, Árvore, Meu Estoque, Mapa/Locais, Modo Farm, Minha Lista, Receitas, Sobre)
- Barra de navegação horizontal e rolável no mobile
- Banner com lua, névoa e silhueta de castelo, desenhado inteiramente em CSS
- Tema escuro
- Design adaptável para desktop, tablet e celular
- Controles com áreas de toque maiores
- Suporte a teclado e foco acessível
- Respeita `prefers-reduced-motion`

### Idiomas
- Português (PT-BR)
- Inglês (EN)
- Troca de idioma sem perder o estado principal da aplicação

### Dados e persistência
- Itens e receitas armazenados localmente no projeto
- Favoritos
- Itens recentes
- Plano de fabricação
- Inventário/estoque local
- Importação e exportação do estado
- Persistência usando `localStorage`

### PWA / Offline
- Aplicação instalável como PWA
- Service Worker
- Cache dos arquivos principais
- Funcionamento offline após o carregamento inicial

### Visual
- Ícones de materiais carregados da V Rising Wiki (vrising.wiki.spellsandguns.com), com emoji como fallback quando um ícone falha ou ainda não está mapeado
- Nenhuma arte oficial de V Rising é usada no projeto — o banner, a marca e os elementos decorativos são desenhados em CSS/SVG, sem reproduzir imagens ou logotipos da Stunlock Studios

## Dados

O projeto utiliza como ponto de partida um grafo comunitário de materiais e receitas de V Rising 1.1. A base ainda deve ser revisada antes de ser considerada uma referência completa e definitiva para uma versão específica do jogo.

Fonte de referência pública:

https://vrising.gaming.tools/

Os dados e receitas podem mudar conforme atualizações do jogo. Por isso, a versão dos dados deve ser considerada separadamente da versão da interface.

Os ícones são carregados da V Rising Wiki (fonte pública da comunidade). V Rising, sua identidade visual e seus assets pertencem aos respectivos detentores de direitos. Este é um projeto de fã, sem arte oficial embutida e sem afiliação com a Stunlock Studios.

## Estrutura do projeto

```text
VRising-Crafting-Calculator/
├── index.html            # Estrutura da aplicação
├── styles.css            # Interface, layout e responsividade
├── app.js                # Motor de cálculo, estado e interações
├── data.js               # Itens e receitas
├── icons.js              # Mapa de ícones dos itens
├── locations.js          # Regiões e locais de recursos
├── manifest.webmanifest  # Configuração PWA
├── sw.js                 # Service Worker e cache offline
└── README.md             # Documentação
```

## Interface

A navegação principal fica em uma barra lateral (sidebar no desktop, barra rolável no mobile) com 8 seções:

```text
Calculadora → Árvore de fabricação → Meu estoque → Mapa/Locais
    → Modo Farm → Minha lista → Receitas → Sobre o projeto
```

Dentro da **Calculadora**, o fluxo segue:

```text
Item + quantidade
    ↓
Árvore de fabricação (visualização principal)
    ↓
Resultado resumido
```

**Meu estoque** mostra, para o item selecionado: materiais necessários → quanto já tenho → quanto falta, e essa informação alimenta o **Modo Farm** em tempo real.

## GitHub Pages

Para publicar pelo GitHub Pages:

1. Abra **Settings → Pages**.
2. Em **Build and deployment**, selecione **Deploy from a branch**.
3. Escolha a branch `main`.
4. Escolha a pasta `/(root)`.
5. Salve e aguarde o deploy.

Como o projeto é composto por HTML, CSS e JavaScript estáticos, não é necessário um backend para executar a interface.

## Desenvolvimento local

Você pode abrir o `index.html` diretamente em um navegador para testar a interface básica.

Para testar corretamente recursos como **Service Worker/PWA**, é recomendado utilizar um servidor HTTP local.

Exemplo com Python:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Próximas etapas

### Dados
- [ ] Completar e validar a base de receitas da versão atual
- [ ] Separar itens, receitas, estações e desbloqueios em estruturas independentes
- [ ] Suportar múltiplas variantes de receita
- [ ] Validar receitas, ingredientes ausentes e dependências circulares
- [ ] Registrar versão/data da base de dados

### Calculadora
- [ ] Comparar receitas alternativas
- [ ] Mostrar rendimento e ciclos necessários
- [ ] Permitir escolha manual da receita
- [ ] Calcular quanto é possível fabricar com o estoque atual
- [ ] Suportar múltiplos itens na mesma calculadora
- [ ] Compartilhar uma configuração via URL

### Árvore
- [ ] Expandir/recolher ramificações
- [ ] Destacar o caminho do material selecionado
- [ ] Mostrar estação de crafting nos nós
- [ ] Permitir clicar em um material para transformá-lo no item principal
- [ ] Exportar árvore como imagem/SVG
- [ ] Melhorar conectores em árvores muito grandes

### Farm
- [ ] Agrupar materiais por região
- [ ] Checklist de coleta
- [ ] Marcar coleta parcial/completa
- [ ] Mostrar progresso da coleta
- [ ] Salvar projetos de farm
- [ ] Criar presets de coleta

### UX / UI
- [ ] Onboarding inicial
- [ ] Tooltips
- [ ] Animações sutis na árvore
- [ ] Melhor feedback para receitas inexistentes
- [ ] Confirmação antes de ações destrutivas
- [ ] Indicador de atualização do aplicativo/PWA
- [x] Página "Sobre o projeto" com contexto e créditos
- [ ] Expandir "Sobre" com detalhes sobre fontes e limitações da base de dados

## Status

**Em desenvolvimento.**

A interface, cálculo recursivo, árvore de fabricação, Meu estoque, Modo Farm, mapa de recursos, base de receitas navegável, persistência local, responsividade (testada de 320px a telas grandes) e PWA já estão implementados. A principal etapa pendente é ampliar e validar a base de dados de receitas e suportar casos mais complexos de crafting.

## Licença e créditos

Este projeto é desenvolvido para fins de estudo e uso da comunidade.

- **V Rising** é propriedade da **Stunlock Studios**.
- O projeto não é oficial e não possui afiliação com a Stunlock Studios.
- Consulte as fontes originais dos dados e ícones para suas respectivas licenças e atribuições.
