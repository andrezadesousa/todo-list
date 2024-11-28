// O store.js é como o cérebro do aplicativo. Ele é o lugar onde guardamos todas as informações importantes que o app precisa lembrar, como uma lista de tarefas. Assim, ao invés de cada componentes gerenciar seu próprio estado, o store permite que todos compartilhem o mesmo "banco de dados" de forma organizada
import { configureStore } from "@reduxjs/toolkit"; // Importa a função configureStore do Redux Toolkit, que simplifica a configuração do store
import todoReducer from "../features/todos/TodoSlice"; // É a parte do código que diz ao store como gerenciar o estado das tarefas.
export const store = configureStore({
  // O reducer é como uma lista de "regras" que o store usa para gerenciar o estado.
  reducer: {
    // 'todos' é uma "fatia" (slice) do estado gerenciado pelo todoReducer.
    // Ele cuida de ações como adicionar, editar, excluir ou alternar tarefas.
    todos: todoReducer, // Conecta o "slice" de tarefas ao store
  },
});
// O que esse arquivo faz?
// Ele cria o store usando o Redux Toolkit.
// Ele combina todos os "reduces" (fatias de estado "slices") que gerenciam partes específicas dos dados.
// Permite que qualquer componente da aplicação leia os dados ou mande atualizar o estado de forma consistente.
// Resumindo
// Ele gerencia o estado (dados) da aplicação.
// Faz a ponte entre os componentes e as ações (dispatch).
// Garante que as mudanças no estado sejam feitas de forma organizada.
// Com o store.js, a aplicação tem um único local confiável para acessar e modificar os dados!
