# Plataforma de Agendamento Simples

Um projeto fullstack para gerenciamento de agendamentos, consistindo em um frontend React e um backend Express com MongoDB.

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para criar a API.
- **MongoDB**: Banco de dados NoSQL.
- **Mongoose**: ODM para modelagem de dados no MongoDB.
- **Nodemon**: Utilitário para reiniciar o servidor automaticamente durante o desenvolvimento.

### Frontend
- **React**: Biblioteca para construção da interface do usuário.
- **Vite**: Ferramenta de build rápida para projetos frontend.
- **Axios**: Cliente HTTP para requisições à API.
- **React Toastify**: Componente para notificações.

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (ou acesso a um cluster MongoDB Atlas)

## 🔧 Instalação e Execução

### 1. Backend

1. Navegue até a pasta `backend`:
   ```bash
   cd backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```
   O servidor iniciará na porta `5000`.
   Nota: Certifique-se de que o MongoDB está rodando localmente na porta padrão (ou configure a conexão em `db/conn.js`).

### 2. Frontend

1. Abra um novo terminal e navegue até a pasta `frontend`:
   ```bash
   cd frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
   A aplicação estará acessível em `http://localhost:5173`.

## 📡 API Endpoints

A API base roda em `http://localhost:5000`.

| Método | Rota | Descrição | Corpo da Requisição (JSON) |
|---|---|---|---|
| `POST` | `/appointments` | Cria um novo agendamento | `{ "clientName": "Nome", "date": "YYYY-MM-DD", "hour": "HH:MM" }` |
| `GET` | `/appointments/:date` | Busca agendamentos por data | N/A |

## 📂 Estrutura do Projeto

```
plataforma_de_agendamento_simples/
├── backend/            # Servidor Node.js/Express
│   ├── controllers/    # Lógica de controle
│   ├── db/             # Conexão com o banco de dados
│   ├── models/         # Modelos Mongoose
│   ├── routes/         # Definição das rotas da API
│   └── index.js        # Ponto de entrada do backend
├── frontend/           # Aplicação web React/Vite
│   ├── src/            # Código fonte do frontend
│   └── vite.config.js  # Configuração do Vite
└── README.md           # Documentação do projeto
```
