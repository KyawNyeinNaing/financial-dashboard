'use client';
import { atom, useAtom } from 'jotai';

import { TYPES, WINDOW_WIDTH } from '@/shared/enum';

interface State {
  switchTheme: boolean | null;
  windowWidth: WINDOW_WIDTH | null;
}

interface Action {
  type: TYPES;
  payload: State;
}

const initialState: State = {
  switchTheme: false,
  windowWidth: null,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case TYPES.SWITCH_THEME:
      return {
        ...state,
        switchTheme: action.payload,
      };

    default:
      return state;
  }
};

const reducerAtom = atom(initialState, (get, set, action) => {
  set(reducerAtom, reducer(get(reducerAtom), action as Action));
});

const useAtomReducer = (type: TYPES) => {
  const [items, dispatch] = useAtom(reducerAtom);

  const setItems = (payload: any) => {
    dispatch({
      type,
      payload,
    });
  };

  return {
    items,
    setItems,
  };
};

export default useAtomReducer;
