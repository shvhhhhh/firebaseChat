import { USER_LOGIN } from "../actionNames";

const intialState = { userName: "" };

export default function(state = intialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, userName: action.userName };
    default:
      return { ...state };
  }
}
