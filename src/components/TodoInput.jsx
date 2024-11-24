import { useState } from "react";

function TodoInput(props) {
  const { newInput, handleNewInput, handleAddNewTask } = props;

  return (
    <>
      <header className="px-32 flex gap-5">
        <input
          value={newInput}
          onChange={handleNewInput}
          type="text"
          className="border border-black text-sm rounded-lg block w-5/6 p-2.5 "
        />
        <button
          onClick={() => handleAddNewTask(newInput)}
          className="w-1/6 bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
        >
          Add
        </button>
      </header>
    </>
  );
}

export default TodoInput;
