const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
        isAdmin:false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
        isAdmin:false,
      };
      case "LOGIN_SUCCESS_ADMIN":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
        isAdmin:true,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
        isAdmin:false,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
        isAdmin:false,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
