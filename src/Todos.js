import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import todoService from "./services/todoService";

const Todos = () => {
  const { username } = useParams(); // Get username from URL
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  /*
  The useEffect hook listens for changes to filter and calls todoService.getFilteredTodos(filter), 
  passing the current value of filter as its parameter.
  */
  useEffect(() => {
    setTodos(todoService.getFilteredTodos(filter));
  }, [filter]);

  /*
  After return, React handles rendering, which is not step-by-step debugging in your code.
  If you want to inspect what happens after return, use React DevTools to see the rendered output, 
  or add breakpoints/logs inside your own code before the return.
  */
  return (
    <div className="container mt-4">
      <h2>{username} My Todos</h2>
      <div>
        {/* When you click one of the filter buttons (All, Active, Completed),
        the corresponding button calls setFilter("all"), setFilter("active"), or
        setFilter("completed"). */}
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                todoService.updateTodo(todo.id, { completed: !todo.completed });
              }}  
            />
            <span className="todo-text">
              {todo.id}: {todo.text}
              <button
                className="btn btn-primary float-end"
                onClick={() => todoService.deleteTodo(todo.id)}
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
