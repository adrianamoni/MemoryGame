export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_CONTRIBUTORS":
      return action.payload;
    default:
      return state;
  }
};
