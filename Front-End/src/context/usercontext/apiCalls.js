import axios from "axios";
import { getUsersStart, getUsersFailure,getUsersSuccess } from "./UserActions";
import {deleteUserSuccess,deleteUserStart,deleteUserFailure} from "./UserActions";

//GET Users
export const getusers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("/api/users/findall", {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};

//Delete User
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete("/api/users/" + id, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};