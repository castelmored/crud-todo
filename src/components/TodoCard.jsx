function TodoCard(props) {
  const { todo } = props;
  return (
    <>
      <li className="px-1 mx-32 my-10 w-9/12 flex justify-between">
        {todo}
        <div className="flex gap-2">
          <button>Edit</button>
          <button>Trash</button>
        </div>
      </li>
    </>
  );
}

export default TodoCard;
