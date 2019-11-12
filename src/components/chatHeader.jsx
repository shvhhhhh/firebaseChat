import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../redux/actions/UserLogin";
import { reciveMessageListener } from "../redux/actions/reciveMessageListener";

class ChatHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: null };
  }

  componentDidMount() {}

  logIn = () => {
    const userName = prompt("Please Enter YourName");
    if (userName) {
      this.props.logIn(userName);
      this.setState({ userName }, () => {
        this.props.reciveMessageListener();
      });
    }
  };

  render() {
    return (
      <div className="card-header msg_head">
        <div className="d-flex bd-highlight">
          <div className="img_cont">
            <img
              src="https://img.icons8.com/pastel-glyph/2x/person-male.png"
              className="rounded-circle user_img"
            />
            <span className="online_icon"></span>
          </div>

          <div className="user_info">
            {this.state.userName ? (
              <>
                <span>Logged In As {this.state.userName}</span>
                <p>1767 Messages</p>
              </>
            ) : (
              <>
                <span>Please Login First</span>
                <button
                  onClick={this.logIn}
                  style={{
                    color: "white",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    border: "2.5px solid white",
                    borderRadius: "20px",
                    marginLeft: "10px"
                  }}
                >
                  SignIn
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { logIn, reciveMessageListener })(ChatHeader);
