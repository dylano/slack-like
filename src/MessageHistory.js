import React from "react";
import PropTypes from "prop-types";
import "./MessageHistory.css";

const MessageHistory = ({ messages }) => {
  const mList = messages.map(m => (
    <div className="messagehistory-item" key={m.timestamp}>
      <span className="messagehistory-item-user">{m.user}</span>
      <span className="messagehistory-item-message">{m.message}</span>
    </div>
  ));
  return <div className="message-history">{mList}</div>;
};
MessageHistory.propTypes = {
  messages: PropTypes.array.isRequired
};

export default MessageHistory;
