import reactContributor from "../apis/reactContributor";

export const fetchContributors = () => async dispatch => {
  const response = await reactContributor.get();
  dispatch({ type: "FETCH_CONTRIBUTORS", payload: response.data.slice(0, 25) });
};

export const startByBtn = action => dispatch => {
  dispatch({ type: "START_BY_BUTTON", payload: action });
};

export const openCard = action => dispatch => {
  dispatch({ type: "OPEN_CARD", payload: action });
};
export const resetOpenedCards = () => dispatch => {
  dispatch({ type: "RESET_OPENED_CARD" });
};
export const updateCardState = action => dispatch => {
  dispatch({ type: "UPDATE_CARD", payload: action });
};
export const updateScore = () => dispatch => {
  dispatch({ type: "UPDATE_SCORE", payload: 100 });
};
export const countdown = () => dispatch => {
  dispatch({ type: "UPDATE_COUNTDOWN", payload: 1 });
};
export const sessionOn = () => dispatch => {
  dispatch({ type: "GAME_SESSION_ON" });
};
export const sessionOff = () => dispatch => {
  dispatch({ type: "GAME_SESSION_OFF" });
};
export const gameSummary = () => dispatch => {
  dispatch({ type: "GAME_SUMMARY" });
};
