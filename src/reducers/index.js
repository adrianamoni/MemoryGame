import { combineReducers } from "redux";
import contributorsReducer from "./contributorsReducer";
import startReducer from "./cardsReducer";
import openCardReducer from "./openCardReducer";
import updateScore from "./updateScoreReducer";
import countdown from "./countdownReducer";
import gameSession from "./gameSessionReducer";
import gameSummary from "./gameSummaryReducer";
import restartGameReducer from "./restartGameReducer";

export default combineReducers({
  contributors: contributorsReducer,
  status: startReducer,
  openedCards: openCardReducer,
  score: updateScore,
  countdown: countdown,
  session: gameSession,
  summary: gameSummary,
  restartGame: restartGameReducer
});
