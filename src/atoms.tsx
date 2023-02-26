import { atom, selector } from 'recoil';

// export type categories = 'To_Do' | 'DOING' | 'DONE';

export enum categories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export interface IToDo {
  text: string;
  id: number;
  category: categories;
}

export const categoryState = atom<categories>({
  key: 'category',
  default: categories.TO_DO,
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
