import { useSetRecoilState } from 'recoil';
import { categories, IToDo, toDoState } from '../atoms';

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) =>
      oldToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, category: name as any } : toDo
      )
    );
  };
  return (
    <li>
      <span>{text}</span>
      {category !== categories.TO_DO && (
        <button name={categories.TO_DO.toString()} onClick={onClick}>
          To do
        </button>
      )}
      {category !== categories.DOING && (
        <button name={categories.DOING.toString()} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== categories.DONE && (
        <button name={categories.DONE.toString()} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
