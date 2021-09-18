import React from 'react';
import { Button } from 'bootstrap';
export const AnswerType = ({ info, link, correct }) => {
  return (
    <div>
      {correct ? (
        <h1>Great job, you've just found the right answer</h1>
      ) : (
        <h1>You got this</h1>
      )}
      <p>{info}</p>
      <Button href={link} target="_blank">
        For More
      </Button>
    </div>
  );
};
