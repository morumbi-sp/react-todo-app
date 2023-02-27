import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { toDoSelector } from '../atoms';
import ThemeBtn from '../Btn/ThemeBtn';
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
  const [listToDo, listDoing, listDone] = useRecoilValue(toDoSelector);

  return (
    <Container>
      <Header>
        <Title>To Do List</Title>
        <ThemeBtn />
      </Header>
      <hr />
      <Category>Doing</Category>
      {listDoing.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      <hr />
      {/* <SelectCategory /> */}
      <Category>To Dos</Category>
      <CreateToDo />
      {listToDo.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      <hr />
      <Category>Done</Category>
      {listDone.map((toDo) => (
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
// 4. add Dark, light theme
// 5. add custom category function.
