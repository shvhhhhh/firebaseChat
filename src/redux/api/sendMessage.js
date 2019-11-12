import firebase from "../../firebaseDb";

export function sendMessageApi(message) {
  return firebase.push(message);
}
