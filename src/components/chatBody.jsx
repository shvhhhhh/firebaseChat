import React, { Component } from "react";
import MsgBubble from "./msgBubble";

import { connect } from "react-redux";
class ChatBody extends Component {
  constructor(props) {
    super(props);
    this.state = { messageHistory: [], shouldScroll: true };
  }

  componentDidUpdate() {
    if (this.state.shouldScroll) {
      this.scrollToBottom();
    }
  }

  handleScroll = event => {
    this.setState({
      shouldScroll: this.messagesEnd.getBoundingClientRect().top < 450
    });
  };

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <div className="card-body msg_card_body" onScroll={this.handleScroll}>
        {this.props.messageList.messageList.map(message => (
          <MsgBubble
            key={message.time}
            {...message}
            fromSameUser={this.props.userInfo.userName === message.userName}
          />
        ))}
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            this.messagesEnd = el;
          }}
        ></div>
      </div>
    );
  }
}

export default connect(state => state, null)(ChatBody);
