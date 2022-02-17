# Bem vindos ao TodoFrontEnd

## Objetivo

---

Projeto desenvolvido para avaliação de capacidades em uma vaga fullStack.

---

## O desafio

---

A empresa Ebytr está passando por problemas de produtividade/controle porque as pessoas colaboradoras vêm tendo dificuldade na organização de suas tarefas individuais. Por esse motivo, a diretora de produto Carolina Bigonha decidiu implantar uma nova forma de organizar as tarefas.
Você foi a pessoa contratada para desenvolver um sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.
Na Ebytr o time de desenvolvimento utiliza a Stack MERN para criar suas aplicações. Foi combinado com a Ebytr que você utilizará essa mesma Stack para resolver o problema de organização e produtividade da empresa.
Abaixo estão (i) os requisitos técnicos, (ii) as funcionalidades, (iii) critérios de avaliação do desafio e (iv) algumas dicas importantes.

#### Requisitos técnicos:

- Front-End em React;
- Back-End em NodeJS, com MongoDB;
- Arquitetura em camadas;

#### Funcionalidades

- Visualizar a lista de tarefas;
- Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;
- Inserir uma nova tarefa na lista;
- Remover uma tarefa da lista;
- Atualizar uma tarefa da lista;
- A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

---

## Como instalar

Pré-requisitos para rodar o projeto:
- NPM

Copie o ssh do projeto `git@github.com:cae07/TodoFrontEnd.git`

* Abra um terminal no seu computador e utilize os comandos abaixo na ordem que são apresentados:

* `git clone git@github.com:cae07/TodoFrontEnd.git`
* `cd TodoFrontEnd`
* `npm install`
* `npm start`

A aplicação rodará na porta 3000.

---

## Arquitetura da aplicação

```
├── README.md
├── src
│   ├── setupTests.js
│   ├── index.js
│   ├── App.js
│   ├── api.js
│   ├── Tests
│   │   ├── login.test.js
│   │   ├── main.test.js
│   │   └── renderWithRouter.js
│   │
│   ├── Pages
│   │   ├── index.js
│   │   ├── Loading.jsx
│   │   ├── Login.jsx
│   │   └── Tasks.jsx
│   │
│   ├── Images
│   │   ├── fundo.jsx
│   │   └── fundo2.jsx
│   │
│   ├── Dictionary
│   │   └── errorMessages.jsx
│   │
│   ├── CSS
│   │   ├── login.css
│   │   └── todolist.css
│   │
│   ├── Context
│   │   ├── myContext.js
│   │   └── Provider.js
│   │
│   └── Component
│       ├── helpers
│       │   ├── index.js
│       │   └── validateFields.js
│       │
│       ├── Modal
│       │   ├── AlertModal.js
│       │   ├── DeleteModal.jsx
│       │   ├── index.js
│       │   └── UpdateModal.jsx
│       │
│       ├── index.js
│       ├── LoginForm.jsx
│       ├── TasksBody.jsx
│       └── TasksHeader.jsx
│
├── package-lock.json
└── package.json

```

### Tecnologias

---

* React
* bootstrap
* react-bootstrap
* eslint
* dotenv
* prop-types
* axios

---

## Regras de negócio

---

### Tela de login

#### Input email

necessário email válido no formato `seuEmail@email.com`

#### Input password

necessário password válido

---

### Tela de Cadastro

#### Input email

necessário email válido no formato `seuEmail@email.com` e necessita ser único.

#### Input password
Mínimo de 6 digitos

---

### Tela de tasks

#### input nova tarefa

O campo não pode ser vazio

#### input atualizar tarefa

O campo não pode ser vazio

---

### Comandos básicos

---

#### Iniciar aplicação
- npm start

#### Rodar testes
- npm test

---

## Próximos passos

* Adicionar filtros para visualização da tabela
* Continuar os testes do app

---

## Link para o projeto

`https://todo-front-end-psi.vercel.app/`

---

# Divirta-se
