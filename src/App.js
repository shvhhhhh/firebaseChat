import React from "react";
import logo from "./logo.svg";
import ChatHeader from "./components/chatHeader";
import ChatBody from "./components/chatBody";
import ChatFooter from "./components/chatFooter";
import "./App.css";
import store from "./redux/store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center h-100">
        <div className="col-md-12 chat">
          <div className="card">
            <Provider store={store}>
              <ChatHeader />
              <ChatBody />
              <ChatFooter />
            </Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
