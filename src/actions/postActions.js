export const CREATE_POST = 'CREATE_POST';
export const createPost = (title, body) => ({
  type: CREATE_POST,
  payload: { title, body },
});

export const UPDATE_POST = 'UPDATE_POST';
export const updatePost = (title, body) => ({
  type: UPDATE_POST,
  payload: { title, body },
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = (post) => ({
  type: DELETE_POST,
  payload: post,
});


