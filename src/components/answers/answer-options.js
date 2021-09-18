import React, { useState, useRef, useEffect } from 'react';
import { answerTypes } from '../../utils/questionsStyle';

export const Option = ({
  option,
  index,
  setUserAnswer,
  correctAnswer,
  userAnswer,
}) => {
  const [show, setShow] = useState(false);
  const inputEl = useRef(null);

  const onButtonClick = () => {
    setUserAnswer(inputEl.current.innerText);
    if (inputEl.current.innerText === correctAnswer) {
      inputEl.current.className = `app_option ${show ? 'show' : ''} ${
        answerTypes.correct
      } `;
    } else {
      inputEl.current.className = `app_option ${show ? 'show' : ''} ${
        answerTypes.incorrect
      }`;
    }
  };

  return (
    <span
      ref={inputEl}
      onClick={onButtonClick}
      onAnimationEnd={() => setShow(true)}
      className={`app_option ${show ? 'show' : ''}`}
    >{`${option}`}</span>
  );
};
