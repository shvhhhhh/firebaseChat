import { NEW_MESSAGE } from "../actionNames";

const intialState = { messageList: [] };

export default function(state = intialState, action) {
  switch (action.type) {
    case NEW_MESSAGE:
      return { ...state, messageList: [...state.messageList, action.payload] };
    default:
      return { ...state };
  }
}
