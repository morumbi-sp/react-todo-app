import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categories, categoryState, toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import SelectCategory from './SelectCategory';
import ToDo from './ToDo';

function ToDoList() {
  const selectToDoCategory = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <SelectCategory />
      <CreateToDo />
      {selectToDoCategory.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
