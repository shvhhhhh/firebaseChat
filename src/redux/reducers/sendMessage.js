import { SEND_MESSAGE } from "../actionNames";

const intialState = { message: {} };

export default function(state = intialState, action) {
  console.log(action);
  switch (action.type) {
    case SEND_MESSAGE:
      return { message: action.payload };
    default:
      return { ...intialState };
  }
}
