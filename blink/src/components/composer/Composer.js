// External dependencies
import React from 'react';
import classNames from "classnames";

// Local dependencies
import CLASSES from "./classes";

const Composer = ({ onSubmit, onChange, value, disabled = false, buttonLabel, placeholder = "Type a message" }) => {
  const mainClassList = classNames(CLASSES.BASE);
  const contentClassList = classNames(CLASSES.SUB_ELEMENTS.CONTENT);
  const inputClassList = classNames(CLASSES.SUB_ELEMENTS.INPUT);
  const buttonClassList = classNames(CLASSES.SUB_ELEMENTS.BUTTON);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  }

  return (
    <footer className={mainClassList}>
      <div className={contentClassList}>
        <input
          className={inputClassList}
          type="text"
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        <button className={buttonClassList} disabled={disabled} onClick={onSubmit}>{buttonLabel}</button>
      </div>
    </footer>
  );
}

export default Composer;
