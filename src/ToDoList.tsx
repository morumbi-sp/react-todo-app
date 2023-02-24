import React, { useState } from 'react';

function ToDoList() {
  const [todo, setTodo] = useState('');
  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setTodo(event.currentTarget.value);
  };
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          value={todo}
          onChange={onChangeHandler}
          placeholder='Write a to do'
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
