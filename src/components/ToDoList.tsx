import { useRecoilValue } from 'recoil';
import { toDoSelector, toDoState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h3>To Do</h3>
      <ul>
        {toDos[0].map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <h3>Doing</h3>
      <ul>
        {toDos[1].map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <h3>Done</h3>
      <ul>
        {toDos[2].map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
