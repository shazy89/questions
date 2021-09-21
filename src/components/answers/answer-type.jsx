import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

const mapStateToProp = (state) => {
  return {
    correct: state.questions.questions[0].correct,
  };
};
export const AnswerType = connect(mapStateToProp)(({ info, link, correct }) => {

  return (
    <div className="after_answer">
      {correct ? (
        <h1 className="after_headers after_correct">You answered correctly!</h1>
      ) : (
        <h1 className="after_headers after_incorrect">You answered incorrectly!</h1>
      )}
      <p  className="after_text">{info} <br /> <a target="_blank" rel="noopener noreferrer" href={link} >Learn More</a></p>

    </div>
  );
});
