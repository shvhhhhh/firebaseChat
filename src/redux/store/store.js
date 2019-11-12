import userInfo from "../reducers/UserLogin";
import sendMessage from "../reducers/sendMessage";
import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import messageList from "../reducers/reciveMessageListener";

const reducer = combineReducers({
  userInfo,
  sendMessage,
  messageList
});

export default createStore(reducer, applyMiddleware(reduxThunk, logger));
