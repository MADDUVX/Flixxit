import axios from "axios";
import { loginFailure, loginStart, loginSuccess, loginSuccess_admin } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/api/auth/login", user);
    res.data.isAdmin? dispatch(loginSuccess_admin(res.data)): dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
