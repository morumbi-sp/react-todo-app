import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { categoriesEnum, categoriesState, toDoSelector } from '../atoms';
import ThemeBtn from '../Btn/ThemeBtn';
import CreateCategory from './CreateCategory';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const Container = styled.div`
  width: 450px;
  margin: auto;
  padding: 0px 20px;
`;
const Header = styled.header`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: ${(props) => props.theme.accentColor};
`;
const Category = styled.h1`
  font-size: 30px;
  font-weight: 500;
  color: ${(props) => props.theme.accentColor};
`;

function ToDoList() {
  const toDosObj = useRecoilValue(toDoSelector);

  const customCategories = Object.keys(toDosObj).slice(0, -3);

  return (
    <Container>
      <Header>
        <Title>To Do List</Title>
        <ThemeBtn />
      </Header>
      <CreateCategory />
      <hr />

      <Category>Doing</Category>
      {toDosObj[categoriesEnum.DOING].map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      <hr />

      <Category>To Dos</Category>
      <CreateToDo />
      {toDosObj[categoriesEnum.TO_DO].map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}

      {customCategories.map((category) => {
        return (
          <>
            <hr />
            <Category key={category}>{category}</Category>
            {toDosObj[category].map((toDo) => (
              <ToDo key={toDo.id} {...toDo} />
            ))}
          </>
        );
      })}

      <hr />
      <Category>Done</Category>
      {toDosObj[categoriesEnum.DONE].map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Container>
  );
}

export default ToDoList;

// 1. add delete Btn [✅]
// 2. save toDoState in the localStorage[✅]
// 3. load from localStorage[✅]
// additional ->
// 4. add Dark, light theme[✅]
// 5. add custom category function.
