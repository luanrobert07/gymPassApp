<h1 align="center">
  🏋️‍♂️ GymPass Style App
</h1>

<h4 align="center"> 
	App completo para gestão de academias e check-ins, inspirado no modelo GymPass 🚀
</h4>

---

## 💻 Sobre o projeto

Este é um sistema completo de gerenciamento de academias, inspirado no modelo GymPass, onde usuários podem buscar academias próximas, realizar check-ins, visualizar histórico e onde administradores podem gerenciar academias e validar check-ins.

---

## ✅ Funcionalidades

### RFs (Requisitos Funcionais)

- [x] Cadastro de usuários
- [x] Autenticação de usuários
- [x] Visualização de perfil do usuário logado
- [x] Visualização do número de check-ins realizados
- [x] Histórico de check-ins do usuário
- [x] Busca por academias próximas (raio de até 10km)
- [x] Busca por academias pelo nome
- [x] Check-in em academias
- [x] Validação de check-in
- [x] Cadastro de academias (admin)

---

## 📌 Regras de Negócio (RNs)

- [x] Não é permitido cadastrar com e-mail já existente
- [x] Não é permitido realizar dois check-ins no mesmo dia
- [x] O check-in só pode ser feito se o usuário estiver a até 100m da academia
- [x] Check-ins só podem ser validados até 20 minutos após sua criação
- [x] Somente administradores podem validar check-ins
- [x] Somente administradores podem cadastrar academias

---

## 📡 Requisitos Não-Funcionais (RNFs)

- [x] Senhas devem ser criptografadas
- [x] Persistência dos dados com PostgreSQL
- [x] Listagens devem ser paginadas com 20 itens por página
- [x] Autenticação via JWT (JSON Web Token)

---

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js
- PostgreSQL
- Variáveis de ambiente configuradas (`.env`)

### Instruções

```bash
# Clone o repositório
$ git clone https://github.com/luanrobert07/gympass-app.git

# Acesse o diretório
$ cd gympass-app

# Instale as dependências
$ npm install

# Configure as variáveis de ambiente no arquivo .env

# Rode as migrations (caso utilize ORM)
$ npx prisma migrate dev

# Inicie a aplicação
$ npm run dev
