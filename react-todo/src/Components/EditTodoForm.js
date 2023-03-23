import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Edit task"
        className="todo-input"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button className="todo-btn" type="submit">
        Update
      </button>
    </form>
  );
};

export default EditTodoForm;
