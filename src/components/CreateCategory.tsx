import { useSetRecoilState } from 'recoil';
import { useForm, SubmitHandler } from 'react-hook-form';
import { categoriesState } from '../atoms';
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

const Icon = styled.span`
  font-size: 25;
  font-weight: 500;
  color: ${(props) => props.theme.accentColor};
`;

interface IForm {
  category: string;
}

function CreateCategory() {
  const setCategory = useSetRecoilState(categoriesState);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = (data: string) => {
    setValue('category', '');
    setCategory((prevCategory) => [data, ...prevCategory]);
  };

  const onSubmit: SubmitHandler<IForm> = (data) => {
    handleValid(data.category);
  };

  return (
    <InputForm onSubmit={handleSubmit(onSubmit)}>
      <InputBox
        {...register('category', {
          required: 'Pease Write a To Do',
        })}
        placeholder='Create new Category'
      />

      <button>
        <Icon className='material-symbols-outlined'>add_circle</Icon>
      </button>
      <br />
    </InputForm>
  );
}

export default CreateCategory;
