const INITIAL_STATE = {
  userObj: null,
};

export default (state = INITIAL_STATE, action) => {
  if (action.type == "DATAFROMDASHBOARD") {
    return { ...state, userObj: action.userObj };
  }
  return state;
};
