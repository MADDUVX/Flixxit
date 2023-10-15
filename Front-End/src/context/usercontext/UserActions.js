export const getUsersStart = () => ({
  type: "GETUSER_START",
});
export const getUsersSuccess = (users) => ({
  type: "GETUSER_SUCCESS",
  payload: users,
});
export const getUsersFailure = () => ({
  type: "GETUSER_FAILURE",
});
export const deleteUserStart = () => ({
  type: "DELETEUSER_START",
});
export const deleteUserSuccess = () => ({
  type: "DELETEUSER_SUCCESS",
});
export const deleteUserFailure = () => ({
  type: "DELETEUSER_FAILURE",
});

