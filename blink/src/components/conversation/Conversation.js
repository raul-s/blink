// External dependencies
import React from 'react';
import classNames from "classnames";

// Local dependencies
import CLASSES from "./classes";

const Conversation = ({ selectedConversation, conversation, clickHandler }) => {
  const mainClassList = classNames(CLASSES.BASE, {
    [CLASSES.MODIFIERS.ACTIVE]: selectedConversation?.id === conversation?.id
  });

  const nameClassList = classNames(CLASSES.SUB_ELEMENTS.NAME);
  const dateClassList = classNames(CLASSES.SUB_ELEMENTS.DATE);

  return (
    <button key={conversation.id} className={mainClassList} onClick={clickHandler}>
      <span className={nameClassList}>{conversation.name}</span>
      <br /><br />
      <span className={dateClassList}>({new Date(conversation.last_updated).toLocaleString()})</span>
    </button>
  );
};

export default Conversation;
