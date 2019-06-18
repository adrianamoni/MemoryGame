const INITIAL_STATE = {
  openedCards: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "OPEN_CARD":
      return { ...state, openedCards: action.payload };
    case "RESET_OPENED_CARD":
      return { ...state, openedCards: [] };
    default:
      return state;
  }
};
