import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { categories, IToDo, toDoState } from '../atoms';

const ToDoBox = styled.li`
  background-color: ${(props) => props.theme.boxColor};
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  height: 3rem;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 0.2rem 0.5rem ${(props) => props.theme.shadowColor};
  transition: background-color 0.3s, box-shadow 0.3s;
  list-style: none;
  a {
    display: flex;
    font-size: 17px;
    font-weight: 400;
    padding: 1rem;
    width: 100%;
    align-items: center;
    transition: color 0.3s;
  }
  &:hover {
    color: ${(props) => props.theme.accentColor};
    box-shadow: 0 0.2rem 0.75rem ${(props) => props.theme.shadowHoverColor};
  }
`;

const BtnTabs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Btn = styled.button<{ isActive?: boolean }>`
  text-align: center;
  text-transform: uppercase;
  border: none;
  height: 2rem;
  color: ${(props) => props.theme.textColor};
  font-size: 12px;
  font-weight: 400;
  background-color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.boxColor};
  box-shadow: 0 0.2rem 0.5rem ${(props) => props.theme.shadowColor};
  :first-child {
    border-radius: 10px 0 0 10px;
  }
  :last-child {
    border-radius: 0 10px 10px 0;
  }

  transition: background-color 0.3s, box-shadow 0.3s;
  a {
    width: 100%;
    align-items: center;
    transition: color 0.3s;
  }
  &:hover {
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.bgColor};
    box-shadow: 0 0.2rem 0.75rem ${(props) => props.theme.shadowHoverColor};
  }
`;

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
    <ToDoBox>
      <span>{text}</span>
      <BtnTabs>
        {category !== categories.TO_DO && (
          <Btn name={categories.TO_DO} onClick={onClick}>
            To do
          </Btn>
        )}
        {category !== categories.DOING && (
          <Btn name={categories.DOING} onClick={onClick}>
            Doing
          </Btn>
        )}
        {category !== categories.DONE && (
          <Btn name={categories.DONE} onClick={onClick}>
            Done
          </Btn>
        )}
        <Btn onClick={onDeleteHandler}>Del</Btn>
      </BtnTabs>
    </ToDoBox>
  );
}

export default ToDo;
