import React from 'react';
import { useRecoilValue } from 'recoil';
import { toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
// import SelectCategory from './SelectCategory';
import ToDo from './ToDo';

function ToDoList() {
  const [listToDo, listDoing, listDone] = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Do List</h1>
      <hr />
      <h3>Doing</h3>
      {listDoing.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      <hr />
      {/* <SelectCategory /> */}
      <h3>To Dos</h3>
      <CreateToDo />
      {listToDo.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      <hr />
      <h3>Done</h3>
      {listDone.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;

// 1. add delete Btn [✅]
// 2. save toDoState in the localStorage
// 3. load from localStorage
// additional ->
// 4. add Dark, light theme
// 5. add custom category function.
