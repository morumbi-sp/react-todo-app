import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'todoLocal-persist',
  storage: localStorage,
});
const { persistAtom: categoryData } = recoilPersist({
  key: 'categoryLocal-persist',
  storage: localStorage,
});

export const isDarkAtom = atom({
  key: 'isDark',
  default: false,
});

export enum categoriesEnum {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const categoryState = atom<categoriesEnum>({
  key: 'category',
  default: categoriesEnum.TO_DO,
});

export const categoriesState = atom<string[]>({
  key: 'categoriesState',
  default: Object.values(categoriesEnum),
  effects_UNSTABLE: [categoryData],
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
    const categories = get(categoriesState);
    let listObj: { [key: string]: IToDo[] } = {};
    categories.forEach((category) => {
      const sortedList = toDos.filter((toDo) => toDo.category === category);
      listObj[category] = sortedList;
    });

    // const listToDo = toDos.filter((toDo) => toDo.category === categories.TO_DO);
    // const listDoing = toDos.filter(
    //   (toDo) => toDo.category === categories.DOING
    // );
    // const listDone = toDos.filter((toDo) => toDo.category === categories.DONE);

    return listObj;
  },
});
