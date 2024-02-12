import "./styles.scss";

import React, { useState } from "react";

import Letter from "../Letter/Letter";

const Envelope: React.FC = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isNoteVisible, setIsNoteVisible] = useState(false);

  const onPressed = () => {
    setIsPressed(!isPressed);
  };

  const onNoteVisible = () => {
    setIsNoteVisible(!isNoteVisible);
  };

  return (
    <>
      <div className={`wrapper ${isPressed ? "open" : ""}`}>
        <div className="heart__envelope" onClick={onPressed}></div>
        <div className="lid one"></div>
        <div className="lid two"></div>
        <div className="envelope" onClick={onPressed}></div>
        <div
          className={`letter ${isNoteVisible ? "show" : ""}`}
          onClick={onNoteVisible}
        >
          <Letter />
        </div>
      </div>
      <div className="hover">- click on the envelope - </div>
    </>
  );
};

export default React.memo(Envelope);
