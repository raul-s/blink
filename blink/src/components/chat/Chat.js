// External dependencies
import React, { useState, useEffect } from 'react';
import classNames from "classnames";

// Components
import Message from "../message/Message";
import Conversation from "../conversation/Conversation";
import Composer from "../composer/Composer";
import ConversationList from "../conversation-list/ConversationList";
import MessageList from "../message-list/MessageList";

// Local dependencies
import CLASSES from "./classes";

const Chat = ({ dataSource = './data.json' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect( () => {
    fetch(dataSource)
      .then(response => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setConversations(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  },[]);

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
    setSelectedMessage(null);
  };

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleNewMessageSubmit = () => {
    if (newMessage.trim() === "") {
      return;
    }

    const newMessageObject = {
      id: selectedConversation.messages.length + 1,
      text: newMessage,
      last_updated: new Date().toISOString()
    };

    const updatedConversation = {
      ...selectedConversation,
      messages: [...selectedConversation.messages, newMessageObject]
    };

    const updatedConversations = conversations.map((conversation) => {
      if (conversation.id === updatedConversation.id) {
        return updatedConversation;
      } else {
        return conversation;
      }
    });

    setConversations(updatedConversations);
    setSelectedConversation(updatedConversation);
    setNewMessage("");
  };

  const handleEditMessage = () => {
    if (editMode) {
      setSelectedConversation(prevConversation => ({
        ...prevConversation,
        messages: prevConversation.messages.map(message => {
          if (message.id === selectedMessage.id) {
            return { ...message, text: newMessage, last_updated: new Date().toISOString() };
          } else {
            return message;
          }
        })
      }));

      setSelectedMessage(null);
      setEditMode(false);
      setNewMessage("");
    } else {
      // set selected message for editing
      setEditMode(true);
    }
  };

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
    setNewMessage(message.text);
    setEditMode(true);
  };

  const renderConversationListItem = (conversation) => {
    const clickHandler = () => handleConversationClick(conversation);

    return (
      <li key={conversation.id} className="c-list__item">
        <Conversation selectedConversation={selectedConversation} conversation={conversation} clickHandler={clickHandler} />
      </li>
    );
  };

  const renderMessageListItem = (message) => {
    return (
      <li key={message.id} className="c-list__item">
        <Message message={message} clickHandler={() => handleSelectMessage(message)} />
      </li>
    );
  };

  const mainClassList = classNames(CLASSES.BASE);

  return isLoaded ? (
    !error && (
      <div className={mainClassList}>
        <ConversationList conversations={conversations} renderConversationListItem={renderConversationListItem} />
        <MessageList selectedConversation={selectedConversation} renderMessageListItem={renderMessageListItem} />
        <Composer disabled={selectedConversation == null} onSubmit={editMode ? handleEditMessage : handleNewMessageSubmit} onChange={handleNewMessageChange} value={newMessage} buttonLabel={editMode ? "Edit" : "Send"} />
      </div>
    )
  ) : (<h1>Loading...</h1>);
}

export default Chat;
