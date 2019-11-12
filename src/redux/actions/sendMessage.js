import { SEND_MESSAGE } from "../actionNames";
import { sendMessageApi } from "../api/sendMessage";
export function sendMessage(message) {
  return dispatch => {
    console.log(message);
    sendMessageApi(message).then(() => {
      dispatch({ type: SEND_MESSAGE, payload: message });
    });
  };
}
