import React, { useState } from "react";

export const TodoList = () => {
  const [toggle, setToggle] = useState(true);
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");
  const [editID, setID] = useState(null);

  const clickHandler = () => {
    if (text && !toggle) {
      setTodoList(
        todoList.map((data) => {
          if (data.id === editID) {
            return { ...data, todo: text };
          }
          return data;
        })
      );
      setText("");
      setToggle(true);
    } else {
      const data = { id: Date.now(), todo: text };
      setTodoList([...todoList, data]);
      setText("");
    }
  };

  const editHandler = (id, e) => {
    const editValue = todoList.find((elem) => {
      return elem.id === id;
    });
    setText(editValue?.todo);
    setToggle(false);
    setID(editValue.id);
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
        value={toggle ? "Add" : "Edit"}
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
