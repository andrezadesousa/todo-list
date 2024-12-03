import React, { useState } from "react";
import { useDispatch } from "react-redux"; //ele permite que a aplicação envie ações ao store
import { addTodo } from "./TodoSlice"; //adicionará uma nova tarefa ao estado.

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch(); // Prepara o "dispatch" para enviar ações ao store

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text)); //Envia o texto como uma nova tarefa para o store
      setText("");
    }
  };

  return (
    <div className="add__container">
      <div className="add__field">
        <label htmlFor="email" className="add__label">
          Adicionar uma nova tarefa
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite sua nova tarefa"
          className="add__input"
        />
        <i class="add__icon ri-task-line"></i>
      </div>
      <button onClick={handleAdd} className="pink__button">
        Adicionar
      </button>
    </div>
  );
};

export default AddTodo;
