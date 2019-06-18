const INITIAL_STATE = {
  score: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_SCORE":
      return { ...state, score: state.score + action.payload };
    default:
      return state;
  }
};
