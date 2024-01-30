# Sistema de Autenticação com Node.js e MongoDB

Este é um projeto simples de sistema de autenticação usando Node.js, Express, MongoDB e Mocha para testes. O sistema utiliza o padrão MVC (Model-View-Controller) para uma organização modular.


## Estrutura do Projeto 

src/
|-- controllers/
|   |-- authController.js
|-- models
|   |-- user.js
|-- views/
|   |-- login.ejs
|   |-- register.ejs
|-- routes/
|   |-- authRoutes.js
|-- tests/
|   |-- authTest.js
|-- app.js
|-- package.json


## Requisitos

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)



## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/auth-system.git 
   


## Instale as dependências:
- cd src
- npm install


## Rotas
- **POST /auth/register:** Registro de um novo usuário.

- **POST /auth/login:** Login de um usuário existente.

## Teste :

npm test