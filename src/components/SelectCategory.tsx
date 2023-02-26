import { useSetRecoilState } from 'recoil';
import { categories, categoryState } from '../atoms';

function SelectCategory() {
  const setCategory = useSetRecoilState(categoryState);
  const onInputHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <select onInput={onInputHandler}>
      <option value={categories.TO_DO}>To Do</option>
      <option value={categories.DOING}>Doing</option>
      <option value={categories.DONE}>Done</option>
    </select>
  );
}

export default SelectCategory;
