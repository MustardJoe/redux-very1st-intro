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
    case 'REMOVE_FOOD':
      return { drinks: null, sandwich: null, chips: null };
    default:
      return state;
    
  }
}

const store = createStore(reducer);
