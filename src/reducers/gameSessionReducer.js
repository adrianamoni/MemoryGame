const INITIAL_STATE = {
  session: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GAME_SESSION_ON":
      return { ...state, session: true };
    case "GAME_SESSION_OFF":
      return { ...state, session: false };
    default:
      return state;
  }
};
