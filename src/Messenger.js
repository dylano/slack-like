import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Messenger.css";

class Messenger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newMessage: ""
    };
  }

  handleChange = evt => {
    this.setState({ newMessage: evt.target.value });
  };

  onNewMessage = (evt, message) => {
    evt.preventDefault();
    if (message) {
      this.props.onNewMessage(message);
      this.setState({ newMessage: "" });
    }
  };

  render() {
    return (
      <div className="messenger">
        <form className="messenger-form" onSubmit={e => this.onNewMessage(e, this.state.newMessage)}>
          <input
            className="messenger-input"
            type="text"
            placeholder="chat here, press Enter to send"
            value={this.state.newMessage}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

Messenger.propTypes = {
  onNewMessage: PropTypes.func.isRequired
};

export default Messenger;
