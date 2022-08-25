const inistate = {
  login: false,
};
const LoginReducer = (state = inistate, actions) => {
  switch (actions.type) {
    case "LOGIN":
      return { ...state, login: actions.payload };
    case "LOGOUT":
      return { login: false };
    default:
      return state;
  }
};

export default LoginReducer;
