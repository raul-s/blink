// External dependencies
import React from 'react';
import classNames from "classnames";

// Local dependencies
import CLASSES from "./classes";

const ConversationList = ({ conversations, renderConversationListItem }) => {
  const mainClassList = classNames(CLASSES.BASE);
  const titleClassList = classNames(CLASSES.SUB_ELEMENTS.TITLE);
  const contentClassList = classNames(CLASSES.SUB_ELEMENTS.CONTENT);
  const listClassList = classNames(CLASSES.SUB_ELEMENTS.LIST);

  return (
    <nav className={mainClassList}>
      <div className={titleClassList}>
        <h2>Conversations</h2>
      </div>
      <div className={contentClassList}>
        <ul className={listClassList}>
          {conversations.sort((a, b) => new Date(b.last_updated) - new Date(a.last_updated)).map(renderConversationListItem)}
        </ul>
      </div>
    </nav>
  );
};

export default ConversationList;
