import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categories, categoryState, toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
  const selectToDoCategory = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInputHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  console.log(category);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select onInput={onInputHandler}>
        <option value={categories.TO_DO}>To Do</option>
        <option value={categories.DOING}>Doing</option>
        <option value={categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {selectToDoCategory.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
