import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  states: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true };
    case 'ALL_DATA':
      return {
        ...state,
        states: action.payload.states,
        regionals: action.payload.regionals,
        subRegionals: action.payload.subRegionals,
        sectors: action.payload.sectors,
        churchs: action.payload.churchs,
      };

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
