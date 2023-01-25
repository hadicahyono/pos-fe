const INITIAL_STATE = {
  id: 0,
  username: "",
  email: "",
  role: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("userReducer action ->", action);
      return { ...state, ...action.payload };
    case "LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};
