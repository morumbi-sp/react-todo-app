import React from 'react';
import { useSetRecoilState } from 'recoil';
import { categories, IToDo, toDoState } from '../atoms';

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((prevToDos) =>
      prevToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, category: name as any } : toDo
      )
    );
  };

  const onDeleteHandler = () => {
    setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
  };
  return (
    <li>
      <span>{text}</span>
      {category !== categories.TO_DO && (
        <button name={categories.TO_DO} onClick={onClick}>
          To do
        </button>
      )}
      {category !== categories.DOING && (
        <button name={categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== categories.DONE && (
        <button name={categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <button onClick={onDeleteHandler}>Delete</button>
    </li>
  );
}

export default ToDo;
