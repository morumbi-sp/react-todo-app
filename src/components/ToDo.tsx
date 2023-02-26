import { useRecoilValue, useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from '../atoms';

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const toDos = useRecoilValue(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) =>
      oldToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, category: name as IToDo['category'] } : toDo
      )
    );
  };
  return (
    <li>
      <span>{text}</span>
      {category !== 'To_Do' && (
        <button name='To_Do' onClick={onClick}>
          To do
        </button>
      )}
      {category !== 'DOING' && (
        <button name='DOING' onClick={onClick}>
          Doing
        </button>
      )}
      {category !== 'DONE' && (
        <button name='DONE' onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
