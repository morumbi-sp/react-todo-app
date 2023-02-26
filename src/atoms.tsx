import { atom, selector } from 'recoil';
export interface IToDo {
  text: string;
  id: number;
  category: 'To_Do' | 'DOING' | 'DONE';
}

export const categoryState = atom({
  key: 'category',
  default: 'To_Do',
});

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    const selectedList = toDos.filter((toDo) => toDo.category === category);

    return selectedList;
  },
});
