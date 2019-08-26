import { createStore } from 'redux';

const initialState = {
  drink: null,
  sandwich: null,
  chips: null,
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: action.payload };
    case 'ADD_CHIPS':
      return { ...state, chips: action.payload };
    case 'REMOVE_DRINK':
      return { ...state, drink: null };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: null };
    case 'REMOVE_CHIPS':
      return { ...state, chips: null };
    case 'EMPTY_LUNCHBOX':
      return initialState;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'Orange Lazarus',
});

/* eslint-disable-next-line no-console */
console.log('added drink', store.getState());

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'Ham and mayonase',
});

/* eslint-disable-next-line no-console */
console.log('added a sammy', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'dill pickle chips',
});

/* eslint-disable-next-line no-console */
console.log('added a bag o chips', store.getState());

store.dispatch({
  type: 'REMOVE_DRINK',
  payload: 'Orange Lazarus',
});

/* eslint-disable-next-line no-console */
console.log('removed drink', store.getState());

store.dispatch({
  type: 'REMOVE_SANDWICH',
  payload: 'Ham and mayonase',
});

/* eslint-disable-next-line no-console */
console.log('removed the sammy', store.getState());

store.dispatch({
  type: 'REMOVE_CHIPS',
  payload: 'dill pickle chips',
});

/* eslint-disable-next-line no-console */
console.log('removed the ships', store.getState());
