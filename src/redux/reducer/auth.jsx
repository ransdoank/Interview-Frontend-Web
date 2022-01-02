import { AUTH_LOGIN, AUTH_LOGOUT } from "../types";

const initialState = {
  dataUser: {},
  isLoading: false,
  isError: false,
  isLogin: false,
  errMessage: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${AUTH_LOGIN}_PENDING`:
      return { ...state, isLoading: true };
    case `${AUTH_LOGIN}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLogin: true,
        errMessage: "",
        dataUser: action.payload,
      };
    case `${AUTH_LOGIN}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isLogin: false,
        errMessage: "Server error!",
      };
    case `${AUTH_LOGOUT}_PENDING`:
      return { ...state, isLoading: true };
    case `${AUTH_LOGOUT}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLogin: false,
        errMessage: "",
        dataUser: action.payload,
      };
    case `${AUTH_LOGOUT}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isLogin: false,
        errMessage: "Server error!",
      };

    default:
      return state;
  }
};

export default authReducer;
