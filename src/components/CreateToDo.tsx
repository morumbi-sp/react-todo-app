import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { categoryState, toDoState } from '../atoms';
import styled from 'styled-components';

const InputForm = styled.form`
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
  &:focus-within {
    border: 2px solid ${(props) => props.theme.accentColor};
  }
`;

const InputBox = styled.input`
  border: none; /* remove InputBox's border */
  outline: none; /* remove InputBox's outline on focus */
  width: 100%;
  font-size: 15px;
  background-color: ${(props) => props.theme.boxColor};
`;

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();

  const handleValid = (data: IForm) => {
    console.log('hi');
    setValue('toDo', '');
    setToDos((prevToDos) => [
      { text: data.toDo, id: Date.now(), category },
      ...prevToDos,
    ]);
  };
  return (
    <InputForm onSubmit={handleSubmit(handleValid)}>
      <InputBox
        {...register('toDo', {
          required: 'Pease Write a To Do',
        })}
        placeholder='Write a to do'
      />

      <button>Add</button>
      <br />
    </InputForm>
  );
}

export default CreateToDo;
