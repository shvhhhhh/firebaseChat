import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "../redux/actions/sendMessage";
class ChatFooter extends Component {
  constructor(props) {
    super(props);
    this.state = { currentMessage: "", userName: "" };
  }

  onTextChange = event => {
    this.setState({ currentMessage: event.target.value });
  };

  sendMessage = () => {
    this.props.sendMessage({
      userName: this.state.userName,
      message: this.state.currentMessage,
      time: Date.now()
    });
    this.setState({ currentMessage: "" });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userName !== this.props.userInfo.userName)
      this.setState({ userName: this.props.userInfo.userName });
  }

  render() {
    const isDisabled = !Boolean(this.state.userName);
    return (
      <div className="card-footer">
        <div className="input-group">
          <textarea
            className="form-control type_msg"
            placeholder={
              isDisabled ? "Please Login First" : "Type your message..."
            }
            onChange={this.onTextChange}
            value={this.state.currentMessage}
            disabled={isDisabled}
          ></textarea>
          {!isDisabled && (
            <div className="input-group-append" onClick={this.sendMessage}>
              <span className="input-group-text send_btn">
                <i className="fas fa-location-arrow"></i>
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return state;
}
export default connect(mapStateToProps, { sendMessage })(ChatFooter);
