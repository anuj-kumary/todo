import React, { useState } from "react";

export const TodoList = () => {
  const [isEdit, setIsEdit] = useState(true);
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const clickHandler = () => {
    if (!isEdit) {
      setTodoList(
        todoList.map((data) => {
          if (data.id === editId) {
            return { ...data, todo: text };
          }
          return data;
        })
      );
      setIsEdit(true);
    } else {
      const data = { id: Date.now(), todo: text };
      setTodoList([...todoList, data]);
    }
    setText("");
  };

  const editHandler = (id, e) => {
    const editValue = todoList.find((elem) => {
      return elem.id === id;
    });
    setText(editValue?.todo);
    setIsEdit(false);
    setEditId(editValue.id);
  };

  const deleteHandler = (id) => {
    const deleteItems = todoList.filter((elem) => {
      return elem.id !== id;
    });
    setTodoList(deleteItems);
  };

  return (
    <>
      <input
        placeholder="Enter Task"
        className="input-txt"
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />

      <input
        onClick={clickHandler}
        className="btn"
        type="submit"
        value={isEdit ? "Add" : "Edit"}
        name="Submit"
      />

      {todoList.map((text) => {
        return (
          <div key={text.id}>
            <li>{text.todo}</li>

            <button
              className="edit-btn"
              onClick={(e) => editHandler(text.id, e)}
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => deleteHandler(text.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};
