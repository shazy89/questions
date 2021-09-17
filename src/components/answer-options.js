import React, { useState } from 'react';

export const Option = ({ option, index }) => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <span
      onClick={() => console.log('click')}
      onAnimationEnd={() => setShow(true)}
      className={`app_option ${show ? 'show' : ''}`}
    >{`${index}) ${option}`}</span>
  );
};
