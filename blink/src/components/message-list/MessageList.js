// External dependencies
import React from 'react';
import classNames from "classnames";

// Local dependencies
import CLASSES from "./classes";

const MessageList = ({ selectedConversation, renderMessageListItem }) => {
  const mainClassList = classNames(CLASSES.BASE);
  const titleClassList = classNames(CLASSES.SUB_ELEMENTS.TITLE);
  const contentClassList = classNames(CLASSES.SUB_ELEMENTS.CONTENT.BASE, {
    [CLASSES.SUB_ELEMENTS.CONTENT.MODIFIERS.EMPTY]: selectedConversation == null
  });
  const listClassList = classNames(CLASSES.SUB_ELEMENTS.LIST);
  const placeholderClassList = classNames(CLASSES.SUB_ELEMENTS.PLACEHOLDER);

  return (
    <main className={mainClassList}>
      <div className={titleClassList}>
        <h1>Messages</h1>
      </div>

      <div className={contentClassList}>
        {selectedConversation ? (
          <ul className={listClassList}>
            {selectedConversation.messages.sort((a, b) => new Date(a.last_updated) - new Date(b.last_updated)).map(renderMessageListItem)}
          </ul>
        ) : (
          <p className={placeholderClassList}>Click on a conversation to view its messages.</p>
        )}
      </div>
    </main>
  );
};

export default MessageList;
