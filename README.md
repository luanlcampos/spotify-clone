# Clonando a Página Inicial do Spotify

Este é um repositório que clona a página inicial do Spotify, desenvolvido utilizando Next.js e TypeScript. Este reposotório foi criado para demonstrar minhas habilidades com React e TypeScript no processo seletivo da Casion.

## Estrutura de Arquivos

```css
src
├── components
│ ├── LibraryNav.tsx
│ ├── LibraryNavBody.tsx
│ ├── LibraryNavChips.tsx
│ ├── LibraryNavFilter.tsx
│ ├── LibraryNavFilterSelect.tsx
│ ├── LibraryNavHeader.tsx
│ ├── LibraryNavItem.tsx
│ ├── MainContent.tsx
│ ├── MainContentCardRow.tsx
│ ├── MainContentHeader.tsx
│ ├── MainContentPicks.tsx
│ ├── MainNav.tsx
│ ├── NavBar.tsx
│ ├── Player.tsx
│ ├── PlayerControls.tsx
│ ├── PlayerRightControls.tsx
│ ├── PlayerSongInfo.tsx
│ └── icons
│ ├── MainContentHeaderIcons.tsx
│ ├── PinIcon.tsx
│ └── PlayerIcons.tsx
├── json
│ └── library-data.json
├── pages
│ ├── \_app.tsx
│ ├── \_document.tsx
│ ├── api
│ │ ├── getLibraryItems.ts
│ │ └── hello.ts
│ └── index.tsx
├── styles
│ └── globals.scss
└── types
└── LibraryNavItem.ts
```

O diretório src contém todos os arquivos relacionados à lógica e à apresentação do aplicativo. A pasta components contém todos os componentes utilizados para construir a interface gráfica do usuário. A pasta json contém o arquivo library-data.json, que é utilizado para carregar os dados estáticos da Library do usuário. A pasta pages contém os arquivos relacionados às rotas do aplicativo. A pasta styles contém os arquivos de estilo do aplicativo. A pasta types contém os tipos TypeScript utilizados no aplicativo.

Este aplicativo utiliza a framework Next.js com TypeScript, SCSS e Tailwind. Instruções de como rodar o programa localmente serão providênciadas abaixo.

## Como Executar

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/luanlcampos/spotify-clone.git

# Instale as dependências:
npm install

# Inicie o aplicativo:
npm run dev
```

O aplicativo será iniciado em http://localhost:3000/ no seu navegador.

## Estrutura de layout

- O layout principal foi divido em um grid com três linhas e três colunas com a seguinda template area:

```css
"navbar main main"
"navbar main main"
"footer footer footer";
```

- Grid também foi escolhido para determinar o layout de outros components, como os cards MainContentPicks e os cards das categorias do MainContent.

- Grande parte do site foi construído usando o layout flex para organizar os componentes da maneira mais parecida com o site do Spotify.

- Os ícones foram extraídos do próprio site da Spotify para manter a equivalência visual. A fonte usada por eles não é gratuita. No entanto, optei por utilizar a font Montserrat.

- Devido ao tempo restrito, algumas funções não foram implementadas neste projeto, mas, podem ser facilmente implementadas caso solicitado.

- Decidi utilizar imagens e nomes repetidos já que meu objetivo era apresentar a estrura dos componentes, e não a requisição de dados por meio da Spotify API.

- Tentei ao máximo manter as cores originais da plataforma, sendo elas:

```css
background: #fff;
foreground: #181818;
highlight: #282828;
```

- Algumas outras cores ou opacidades foram usados em momentos específicos em eventos de hover.
