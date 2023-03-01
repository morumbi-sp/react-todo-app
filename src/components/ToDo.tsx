import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { categoriesState, IToDo, toDoState } from '../atoms';

const ToDoBox = styled.li`
  background-color: ${(props) => props.theme.boxColor};
  display: flex;
  padding: 5px 10px 10px 15px;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.textColor};
  height: 4rem;
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
  span {
    margin-bottom: 4px;
  }
`;

const BtnTabs = styled.div`
  display: flex;
  margin-left: auto;
`;

const Btn = styled.button<{ isActive?: boolean }>`
  text-align: center;
  text-transform: uppercase;
  min-width: 50px;
  height: 17px;
  color: ${(props) => props.theme.textColor};
  font-size: 11px;
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
  const categories = useRecoilValue(categoriesState);
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
        {categories.map(
          (item) =>
            category !== item && (
              <Btn key={item} name={item} onClick={onClick}>
                {item}
              </Btn>
            )
        )}
        <Btn onClick={onDeleteHandler}>Del</Btn>
      </BtnTabs>
    </ToDoBox>
  );
}

export default ToDo;
