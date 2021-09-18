import React, { useState, useRef } from 'react';

export const Option = ({ option, index, setUserAnswer }) => {
  const [show, setShow] = useState(false);
  const inputEl = useRef(null);

  const onButtonClick = () => {
    setUserAnswer(inputEl.current.innerText);
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
