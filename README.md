# 📝 Todo List App

Oie, pessoa! **Todo List App** é um projeto simples e funcional para gerenciar suas tarefas diárias, desenvolvido com foco em aprendizado e boas práticas utilizando **React.js** e **Redux Toolkit**. 🚀

---

## 🌟 Funcionalidades

- ✅ Adicionar tarefas.
- ✏️ Editar tarefas existentes.
- ❌ Remover tarefas.
- 📱 Totalmente responsivo para dispositivos móveis e desktops.

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- ⚛️ **React.js**: Framework JavaScript para criar interfaces de usuário dinâmicas.
- 🛠️ **Redux Toolkit**: Gerenciamento de estado simplificado e eficiente.
- 🎨 **CSS Responsivo**: Design moderno e responsivo, com suporte para telas pequenas e grandes.

---

## Resumo dos arquivos do projeto 📓

1. **store.js**
   - Configura o store e conecta os reducers.
   - Centraliza os dados da aplicação.
2. **todoSlice.js**
   - Cria um slice para gerenciar a lista de tarefas.
   - Inclui estado inicial, reducers e ações.
3. **AddTodo.js**
   - Componente React que adiciona novas tarefas ao estado.
   - Usa **dispatch** para disparar a ação `addTodo`.
4. **TodoItem.js**
   - Representa cada tarefa individual.
   - Permite alternar, editar ou excluir uma tarefa.

---

## O que é o Redux Toolkit? 🤔

O Redux Toolkit é uma biblioteca que facilita o uso do Redux, uma ferramenta para gerenciar o estado (os dados) de uma aplicação. Ele ajuda a manter a aplicação organizada e eficiente, principalmente quando ela cresce e o número de dados aumenta.

## Vantagens do Redux Toolkit

- Menos código para gerenciar o estado;
- Configuração simples e rápida com configureStore;
- Suporte nativo a boas práticas;
- Reduz duplicação de código e erros.

---

## Conceitos principais do Redux Toolkit :chave:

1. **Store** 🧠
   - Centraliza o estado da aplicação (como um banco de dados interno).
   - Configurado com **`configureStore`**.
   - Permite que qualquer componente acesse ou atualize os dados.
2. **Reducer** 🔁
   - Função que define como o estado muda de acordo com uma ação.
   - Não altera o estado diretamente, sempre retorna uma nova versão.
3. **Dispatch** 🚀
   - Função que envia (ou dispara) uma ação para o **reducer**.
   - Informa ao Redux que algo aconteceu e precisa ser atualizado.
4. **Provider** 💡
   - Conecta o **store** ao React.
   - Envolve a aplicação para que os componentes possam acessar o estado global.
5. **createSlice** 🍰
   - Combina estado, reducers e ações automaticamente.
   - Facilita a criação de "fatias" (slices) do estado.
6. **Actions** 🎯
   - Objetos que descrevem uma mudança no estado.
   - Criadas automaticamente pelo **createSlice**.

---

## Fluxo de Dados do Redux Toolkit 🔁

1. O **componente React** dispara uma ação com **dispatch**.
2. A ação chega ao **reducer**, que decide como atualizar o estado.
3. O estado atualizado é armazenado no **store**.
4. Os componentes que precisam desse estado são atualizados automaticamente.

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/todo-list.git
   cd todo-list
   ```
2. **Instale as dependências**:
   ```bash
   npm install
   ```
3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   ```
4. **Abra no navegador**:
   ```bash
   Acesse: http://localhost:3000
   ```

---

Este README é bem estruturado, inclui emojis para maior clareza e apresenta o projeto de maneira profissional e convidativa, desenvolvido por `andrezadesousa` e `Andreza Sousa` e com o apoio do pai `Google`😊
