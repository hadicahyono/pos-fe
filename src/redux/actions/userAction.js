export const loginAction = (data) => {
  console.log("data login ->", data);
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const logoutAction = () => {
  localStorage.removeItem("pos_login");
  console.log("logoutAction ->", logoutAction);
  return {
    type: "LOGOUT",
  };
};
