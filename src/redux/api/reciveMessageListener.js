import firebase from "../../firebaseDb";

export default callback => {
  firebase.limitToLast(10).on("child_added", snapShot => {
    callback(snapShot.val());
  });
};
