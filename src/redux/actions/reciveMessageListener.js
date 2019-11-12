import { NEW_MESSAGE } from "../actionNames";
import reciveMessageListenerApi from "../api/reciveMessageListener";
export function reciveMessageListener() {
  return dispatch => {
    reciveMessageListenerApi(newMessage => {
      console.log(newMessage);
      dispatch({ type: NEW_MESSAGE, payload: newMessage });
    });
  };
}
