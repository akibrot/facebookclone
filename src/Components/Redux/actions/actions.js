export const GET_POST = (payload) => {
  return {
    type: "GET_POST",
    payload: payload,
  };
};

export const LOGIN = (payload) => {
  return {
    type: "LOGIN",
    payload: payload,
  };
};

export const LOGOUT = () => {
  return {
    type: "LOGOUT",
  };
};

