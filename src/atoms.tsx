import { atom, selector } from 'recoil';
export interface IToDo {
  text: string;
  id: number;
  category: 'To_Do' | 'DOING' | 'DONE';
}

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);

    const categoryToDo = toDos.filter((toDo) => toDo.category === 'To_Do');
    const categoryDoing = toDos.filter((toDo) => toDo.category === 'DOING');
    const categoryDone = toDos.filter((toDo) => toDo.category === 'DONE');

    return [categoryToDo, categoryDoing, categoryDone];
  },
});
