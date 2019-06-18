const INITIAL_STATE = {
  countdown: 60
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_COUNTDOWN":
      return { ...state, countdown: state.countdown - action.payload };
    default:
      return state;
  }
};
