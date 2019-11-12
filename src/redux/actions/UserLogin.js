import { USER_LOGIN } from "../actionNames";
export function logIn(userName) {
  return { type: USER_LOGIN, userName };
}
