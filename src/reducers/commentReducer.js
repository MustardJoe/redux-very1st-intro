import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = [];

export default function commentReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return [...state, action.payload];
    case DELETE_COMMENT:
      state.splice(action.payload - 1, 1);
      return [...state];
    default:
      return state;
  }
}
