const INITIAL_STATE = {
  userObj: null,
  apiUser: null,
};

export default (state = INITIAL_STATE, action) => {
  if (action.type == "DATAFROMLOGIN") {
    state.userObj = action.userObj;
    return { ...state };
  } else if (action.type == "DATAFROMAPI") {
    state.apiUser = action.apiUser;
    return { ...state };
  }
  return state;
};
