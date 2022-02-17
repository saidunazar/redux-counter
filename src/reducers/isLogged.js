const loggedReducer = (state = true, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return false;
    case "LOGGED_OUT":
      return true;
    default:
      return state;
  }
};

export default loggedReducer;
