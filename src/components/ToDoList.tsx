import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, toDoSelector, toDoState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
  const selectToDoCategory = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInputHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

  console.log(category);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select onInput={onInputHandler}>
        <option value='To_Do'>To Do</option>
        <option value='DOING'>Doing</option>
        <option value='DONE'>Done</option>
      </select>
      <CreateToDo />
      {selectToDoCategory.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
