import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";

const buildConversationList = (channels, selectedConversation, onConversationSelect) => {
  return channels.map(channel => {
    const cl = `sidebar-conversation-name ${channel.id === selectedConversation ? "selected" : ""}`;
    return (
      <li className={cl} key={channel.id} onClick={() => onConversationSelect(channel.id)}>
        {channel.name}
      </li>
    );
  });
};

const Sidebar = ({ channels, people, selectedConversation, onConversationSelect }) => {
  const chanList = buildConversationList(channels, selectedConversation, onConversationSelect);
  const peopleList = buildConversationList(people, selectedConversation, onConversationSelect);

  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <span className="sidebar-section-title">Channels</span>
        <div className="sidebar-channels">{chanList}</div>
      </div>
      <div className="sidebar-section">
        <span className="sidebar-section-title">People</span>
        <div className="sidebar-people">{peopleList}</div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  channels: PropTypes.array.isRequired,
  people: PropTypes.array.isRequired,
  selectedConversation: PropTypes.number.isRequired,
  onConversationSelect: PropTypes.func.isRequired
};

export default Sidebar;
