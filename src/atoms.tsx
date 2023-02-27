import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'todoLocal-persist',
  storage: localStorage,
});

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
  effects_UNSTABLE: [persistAtom],
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

export const isDarkAtom = atom({
  key: 'isDark',
  default: false,
});
