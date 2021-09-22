import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';


export const AnswerType = ({ questionInfo: {info, link, isCorrect} }) => {
// we dont know if this is correct yet -FIX THE REDUCER!!!!
console.log(isCorrect)
  return (
    <div className="after_answer">
      {isCorrect ? (
        <h1 className="after_headers after_correct">You answered correctly!</h1>
      ) : (
        <h1 className="after_headers after_incorrect">You answered incorrectly!</h1>
      )}
      <p  className="after_text">{info} <br /> <a target="_blank" rel="noopener noreferrer" href={link} >Learn More</a></p>

    </div>
  );
};
