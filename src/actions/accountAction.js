const singIn = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        user: {
          id: "1",
          name: "David",
          email: "david@gmail.com",
        },
      },
    });
  };
};

export default singIn;
