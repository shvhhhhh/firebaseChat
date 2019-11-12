import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AAAAAAAAAAAAAAAAAAAA",
  authDomain: "chatapp.firebaseapp.com",
  databaseURL: "https://chatapp.firebaseio.com",
  projectId: "chatapp",
  storageBucket: "chatapp.appspot.com",
  messagingSenderId: "123456789876",
  appId: "1:752737124615:web:23456789876543456",
  measurementId: "G-3456789876543456"
};
firebase.initializeApp(firebaseConfig);

export default firebase.database().ref("/messageList/");
