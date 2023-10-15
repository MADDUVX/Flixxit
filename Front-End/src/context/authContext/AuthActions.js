export const loginStart = () => ({
  type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginSuccess_admin = (user) => ({
  type: "LOGIN_SUCCESS_ADMIN",
  payload: user,
});

export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

//logout

export const logout = () => ({
  type: "LOGOUT",
});
