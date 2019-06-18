const INITIAL_STATE = {
  gameRestart: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GAME_RESTART":
      return { ...state, summary: false, score: 0, countdown: 60 };
    default:
      return state;
  }
};
