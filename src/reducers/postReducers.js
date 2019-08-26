import { CREATE_POST, UPDATE_POST, DELETE_POST } from '../actions/postActions';

const initialState = {
  posts: [],
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, title: 'here is title', body: 'here is body' };
    case UPDATE_POST:
      return { ...state, nofuckingclue };
    case DELETE_POST:
      return { ...state, delete the post! }
    default:
      return state;
  }

}

export default reducer;

