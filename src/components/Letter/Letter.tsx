import "./styles.scss";

import React from "react";

const Letter: React.FC = () => {
  return (
    <div className="letter__inner">
      <div className="letter-front valentines-day-card">
        <span className="hover__card"> Click here to read </span>
        <div className="clouds"></div>
        <div className="hearts">
          <div className="heartOne">
            <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
          <div className="heartTwo">
            <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
          <div className="heartThree">
            <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
          <div className="heartFour">
            <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
          <div className="heartFive">
            <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
        </div>
        <div className="text">
          Happy Valentine's
          <br /> Day!
        </div>
      </div>
      <div className="letter-back">
        <p>Dear Mou,</p>
        <p>
          "As long as we share the same sky and breathe the same air, we are
          still together!". Num you to the infinity and beyond. I miss you. I
          hope you like this small gesture of mine.
        </p>
        <p>
          Yours,
          <br />
          UC
        </p>
      </div>
    </div>
  );
};

export default Letter;
