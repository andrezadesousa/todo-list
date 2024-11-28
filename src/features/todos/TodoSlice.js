import { createSlice } from "@reduxjs/toolkit"; //É uma função do Redux Toolkit que facilita a criação de um slice

const todoSlice = createSlice({
  name: "todos", //Nomeia esta fatia de estado como "todos".
  initialState: [], //Começa com uma lista vazia de tarefas
  reducers: {
    //Define as ações que podem ser feitas com a lista de tarefas.
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions; //São exportadas para que os componentes possam usá-las e "pedir" ao Redux para modificar o estado.

// Aqui estamos exportando o reducer gerado pelo createSlice. É exportado para ser incluído no store, que combina todas as partes do estado da aplicação.
export default todoSlice.reducer;

//Resumo
// todoSlice.actions é um objeto que contém todas as funções de ação que eu posso usar para alterar o estado da lista de tarefas.
// Essas ações são as funções geradas automaticamente que eu posso disparar (ou "dispatch") para modificar o estado.
