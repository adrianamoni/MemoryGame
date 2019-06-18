const INITIAL_STATE = {
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "START_BY_BUTTON":
      return { ...state, data: action.payload, score: 0, countdown: 0 };
    case "UPDATE_CARD":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
