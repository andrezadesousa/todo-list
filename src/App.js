import React from "react";
import AddTodo from "./features/todos/AddTodo";
import TodoList from "./features/todos/TodoList";
import "./App.css";
import Avatar from "./assets/register.jpg";

const App = () => {
  return (
    <div className="app__container">
      <img src={Avatar} alt="Avatar" className="app__image" />
      <div className="app__content">
        <h1 className="app__title">Todo List</h1>
        <p className="app__text">
          Olá, essa será sua Todo List, desenvolvida com ReactJS e Redux
          Toolkit.{" "}
        </p>
        <div className="app__form">
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
