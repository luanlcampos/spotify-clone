# Clonando a Página Inicial do Spotify

Este é um repositório que clona a página inicial do Spotify, desenvolvido utilizando Next.js e TypeScript. Este reposotório foi criado para demonstrar minhas habilidades com React e TypeScript no processo seletivo da Casion.

Estrutura de Arquivos

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
git clone https://github.com/SEU-USUARIO-NOME/spotify-clone.git

# Instale as dependências:
npm install

# Inicie o aplicativo:
npm run dev
```

O aplicativo será iniciado em http://localhost:3000/ no seu navegador.
