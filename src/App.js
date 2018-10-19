import React, { Component } from "react";
import Sidebar from "./Sidebar";
import MessageHistory from "./MessageHistory";
import Messenger from "./Messenger";
import { messages } from "./sample-data";
import "./App.css";

class App extends Component {
  state = {
    ...messages,
    selectedConversation: messages.conversations[0].id
  };

  onConversationSelect = conversationId => {
    this.setState({ selectedConversation: conversationId });
  };

  onNewMessage = message => {
    const updatedConv = this.state.conversations.find(convo => convo.id === this.state.selectedConversation);
    if (updatedConv) {
      updatedConv.messages.push({ timestamp: Date.now(), user: "Me", message });
      this.setState({
        conversations: this.state.conversations.map(
          existingConv => (existingConv.id === this.state.selectedConversation ? updatedConv : existingConv)
        )
      });
    }
  };

  getSelectedConversation = () => {
    let conversation = this.state.conversations.find(conv => conv.id === this.state.selectedConversation);
    return conversation ? conversation.messages : [];
  };

  render() {
    const channels = this.state.conversations.filter(conv => conv.type === "channel").map(channel => {
      return {
        id: channel.id,
        name: channel.name
      };
    });
    const people = this.state.conversations.filter(conv => conv.type === "person").map(person => {
      return {
        id: person.id,
        name: person.name
      };
    });
    const messages = this.getSelectedConversation();
    return (
      <div className="App">
        <Sidebar
          channels={channels}
          people={people}
          selectedConversation={this.state.selectedConversation}
          onConversationSelect={this.onConversationSelect}
        />
        <div className="app-messages">
          <MessageHistory messages={messages} />
          <Messenger onNewMessage={this.onNewMessage} />
        </div>
      </div>
    );
  }
}

export default App;
