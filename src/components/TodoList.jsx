// import TodoCard from "./TodoCard";

function TodoList(props) {
  const { todos, handleDeleteTask, handleEditTask } = props;

  return (
    <>
      <ul>
        {todos.map((todo, todoIndex) => (
          // <TodoCard todo={todo} />
          <li
            key={todoIndex}
            className="px-1 mx-32 my-10 w-9/12 flex justify-between"
          >
            {todo}
            <div className="flex gap-5 w-3/12">
              <button onClick={() => handleEditTask(todoIndex)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button onClick={() => handleDeleteTask(todoIndex)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
