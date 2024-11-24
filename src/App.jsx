import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App(props) {
  const [newInput, setNewInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewInput = (e) => {
    setNewInput(e.target.value);
    // console.log(newInput);
  };

  const handleAddNewTask = (newTodo) => {
    const newTodosArr = [...todos, newTodo];
    setTodos(newTodosArr);
    console.log(newTodosArr);
    setNewInput("");
  };

  const handleDeleteTask = (index) => {
    const newTodosArr = todos.filter((task, taskIndex) => taskIndex !== index);
    setTodos(newTodosArr);
  };

  const handleEditTask = (index) => {
    const task = todos[index];
    setNewInput(task);
    handleDeleteTask(index);
  };

  return (
    <>
      <div className="font-pressStart2p py-10 h-screen bg-blue-100">
        <TodoInput
          newInput={newInput}
          handleNewInput={handleNewInput}
          handleAddNewTask={handleAddNewTask}
        />
        <TodoList
          todos={todos}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      </div>
    </>
  );
}

export default App;
