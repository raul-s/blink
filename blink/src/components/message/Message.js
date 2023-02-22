// External dependencies
import React from 'react';
import classNames from "classnames";

// Local dependencies
import CLASSES from "./classes";

const Message = ({ message, clickHandler }) => {
  const date = new Date(message.last_updated).toLocaleString();
  const messageClassList = classNames(CLASSES.BASE);
  const dateClassList = classNames(CLASSES.SUB_ELEMENTS.DATE);
  const textClassList = classNames(CLASSES.SUB_ELEMENTS.TEXT);

  return (
    <div className={messageClassList} onClick={clickHandler}>
      <div className={dateClassList}>{date}</div>
      <div className={textClassList}>{message.text}</div>
    </div>
  );
};

export default Message;
