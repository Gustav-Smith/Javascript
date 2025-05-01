# LifeHub API

🚀 **LifeHub API** é uma API RESTful desenvolvida com Node.js, Express e MongoDB. Ela fornece funcionalidades de autenticação e gerenciamento de tarefas para aplicações.

## 📋 Funcionalidades

- Registro de usuários
- Login de usuários com autenticação JWT
- Gerenciamento de tarefas (em desenvolvimento)

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT (JSON Web Token)](https://jwt.io/)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [dotenv](https://github.com/motdotla/dotenv)
- [Nodemon](https://nodemon.io/) (para desenvolvimento)

## 📂 Estrutura do Projeto
.env .gitignore package.json server.js config/ controllers/ middlewares/ models/ routes/


## 🚀 Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [MongoDB](https://www.mongodb.com/) configurado
- Um arquivo `.env` com as seguintes variáveis:
MONGO_URI=<sua-string-de-conexão-com-o-MongoDB> JWT_SECRET=<sua-chave-secreta-para-JWT> PORT=<porta-opcional>


### Passos

1. Clone o repositório:
 ```bash
 git clone <url-do-repositorio>
 cd lifehub-api

 2. Aqui está o conteúdo completo do README atualizado para você copiar e colar:

```markdown
# LifeHub API

🚀 **LifeHub API** é uma API RESTful desenvolvida com Node.js, Express e MongoDB. Ela fornece funcionalidades de autenticação e gerenciamento de tarefas para aplicações.

## 📋 Funcionalidades

- Registro de usuários
- Login de usuários com autenticação JWT
- Gerenciamento de tarefas (em desenvolvimento)

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT (JSON Web Token)](https://jwt.io/)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [dotenv](https://github.com/motdotla/dotenv)
- [Nodemon](https://nodemon.io/) (para desenvolvimento)

## 📂 Estrutura do Projeto

```
.env
.gitignore
package.json
server.js
config/
controllers/
middlewares/
models/
routes/
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [MongoDB](https://www.mongodb.com/) configurado
- Um arquivo `.env` com as seguintes variáveis:
  ```
  MONGO_URI=<sua-string-de-conexão-com-o-MongoDB>
  JWT_SECRET=<sua-chave-secreta-para-JWT>
  PORT=<porta-opcional>
  ```

### Passos

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd lifehub-api
    ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse a API em `http://localhost:<PORT>` (por padrão, a porta é `5000`).

## 📖 Rotas Disponíveis

### Autenticação (`/api/auth`)

- `POST /register` - Registra um novo usuário.
  - **Body**: `{ nome, email, senha }`
- `POST /login` - Faz login de um usuário.
  - **Body**: `{ email, senha }`

### Tarefas (`/api/tasks`)

- `GET /` - Retorna uma mensagem de teste (em desenvolvimento).

## 🛡️ Segurança

- Senhas são criptografadas com [Bcrypt](https://github.com/kelektiv/node.bcrypt.js).
- Tokens JWT são usados para autenticação.

## 🛠️ Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch para sua funcionalidade: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adiciona minha nova funcionalidade'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um Pull Request.

## 📝 Licença

Este projeto está licenciado sob a licença **ISC**. Consulte o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **Autor**: [Gustavo]
- **Email**: [gustavojeanpt@gmail.com]
- **LinkedIn**: [Seu Perfil no LinkedIn]

---
