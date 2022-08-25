const inistate = {
  Posts: [],
};
const GetPostReducer = (state = inistate, actions) => {
  switch (actions.type) {
    case "GET_POST":
      return { ...state, Posts: actions.payload };
    default:
      return state;
  }
};

export default GetPostReducer;
