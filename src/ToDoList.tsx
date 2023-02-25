import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  toDo: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log('add to do', data.toDo);
    setValue('toDo', '');
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register('toDo', {
            required: 'Pease Write a To Do',
          })}
          placeholder='Write a to do'
        />
        <button>Add</button>
        <br />
        <span>{errors.toDo?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
