📌 Tela de Login em React

Este é o projeto Tela de Login em React, uma aplicação simples criada com React + Vite que exibe uma interface de login funcional e pode servir de base para autenticação em seus projetos.

🌐 Demo online:
➡️ https://pitombeira1984.github.io/react-login/

🚀 Tecnologias Utilizadas

Esse projeto foi desenvolvido com:

🔹 React

🔹 Vite

🔹 HTML / CSS / JavaScript

🔹 ESLint

🔹 Deploy no GitHub Pages

📁 Estrutura do Projeto
    react-login/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── App.jsx
    │   └── main.jsx
    ├── .gitignore
    ├── package.json
    ├── vite.config.js
    └── README.md


⚙️ Como Usar (Instalação)

Clone o repositório

git clone https://github.com/pitombeira1984/react-login.git


Instale as dependências

npm install


Execute o projeto localmente

npm run dev


O projeto será aberto em:

http://localhost:5173

📌 Funcionalidades

✔️ Formulário de Login com campos de entrada
✔️ Validação básica dos campos
✔️ Interface simples e responsiva

💡 Essa é uma base perfeita para você adicionar conexão com APIs de autenticação, Redux ou NextAuth no futuro!

📦 Scripts Disponíveis

No diretório do projeto, você pode rodar:

Script	Descrição
npm run dev	Roda a aplicação no modo de desenvolvimento
npm run build	Gera os arquivos otimizados para produção
npm run preview	Visualiza o build final localmente

🛠️ Deployment

Este projeto está publicado utilizando GitHub Pages.
Caso queira refazer o deploy:

Instale o pacote:

npm install gh-pages --save-dev


Ajuste o package.json com os scripts:

"homepage": "https://pitombeira1984.github.io/react-login",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}


Rode:

npm run deploy

🤝 Contribuições

Contribuições são bem-vindas!
Quer melhorar o design, adicionar autenticação com backend ou criar validações avançadas? Abra uma issue ou faça um pull request. 😊

📄 Licença

No momento sem Licença.