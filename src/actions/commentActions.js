export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (id, postid, body) => ({
  type: CREATE_COMMENT,
  payload: { id, postid, body }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  payload: id,
});
