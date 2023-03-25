import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        required
        type="text"
        placeholder="Enter the task to be performed"
        className="todo-input"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button className="todo-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
