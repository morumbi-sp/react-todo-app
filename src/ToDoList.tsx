import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register('email', { required: 'Email is required' })}
          placeholder='Email'
        />
        <input
          {...register('firstName', { required: 'firstName is required' })}
          placeholder='First Name'
        />
        <input
          {...register('lastName', { required: 'lastName is required' })}
          placeholder='Last Name'
        />
        <input
          {...register('userName', {
            required: 'userName is required',
            minLength: { value: 5, message: 'Your input is too short' },
          })}
          placeholder='User Name'
        />
        <input
          {...register('password', {
            required: 'password is required',
            minLength: { value: 5, message: 'Your input is too short ' },
          })}
          placeholder='Password'
        />
        <input
          {...register('password1', {
            required: 'password1 is required',
            minLength: { value: 5, message: 'Your input is too short' },
          })}
          placeholder='Password1'
        />
        <button>Add</button>
      </form>
    </div>
  );
}

/* function ToDoList() {
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
} */

export default ToDoList;
