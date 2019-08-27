import { CREATE_POST, UPDATE_POST, DELETE_POST } from '../actions/postActions';

const initialState = [];

function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return [...state, action.payload ];
    case UPDATE_POST:
      return [...state.slice(0, action.payload.id), ...state.slice(action.payload + 1)];
    case DELETE_POST:
      return [...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)];
    default:
      return state;
  }
}

export default reducer;

