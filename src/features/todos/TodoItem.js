import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "./TodoSlice"; //manipular o estado das tarefas

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim()) {
      dispatch(editTodo({ id: todo.id, newText }));
      setIsEditing(false);
    }
  };

  return (
    <li className="item__list">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          className="add__input "
        />
      ) : (
        <span
          onClick={() => dispatch(toggleTodo(todo.id))}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
            flex: 1,
          }}
        >
          {todo.text}
        </span>
      )}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)} className="update__btn">
          Edit
        </button>
      )}
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="delete__btn"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
