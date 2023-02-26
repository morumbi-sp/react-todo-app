import { useSetRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { toDoState } from '../atoms';

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
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
  );
}

export default CreateToDo;