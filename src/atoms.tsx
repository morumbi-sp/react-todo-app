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
    // const category = get(categoryState);
    const listToDo = toDos.filter((toDo) => toDo.category === categories.TO_DO);
    const listDoing = toDos.filter(
      (toDo) => toDo.category === categories.DOING
    );
    const listDone = toDos.filter((toDo) => toDo.category === categories.DONE);

    return [listToDo, listDoing, listDone];
  },
});
