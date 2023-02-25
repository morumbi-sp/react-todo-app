import { useForm } from 'react-hook-form';
import { atom, useRecoilState } from 'recoil';

interface IToDo {
  text: string;
  id: number;
  category: 'To_Do' | 'DOING' | 'DONE';
}

interface IForm {
  toDo: string;
}

const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    setValue('toDo', '');
    setToDos((prevToDos) => [
      { text: data.toDo, id: Date.now(), category: 'To_Do' },
      ...prevToDos,
    ]);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register('toDo', {
            required: 'Pease Write a To Do',
          })}
          placeholder='Write a to do'
        />
        <button>Add</button>
        <br />
        <span>{errors.toDo?.message}</span>
      </form>
      <ul>
        {toDos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
