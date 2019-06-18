export default (state = false, action) => {
  switch (action.type) {
    case "GAME_SUMMARY":
      return { ...state, summary: true };
    default:
      return state;
  }
};
