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
        <h1 className="after_headers after_correct">Great job, that's correct!</h1>
      ) : (
        <h1 className="after_headers after_incorrect">Incorrect</h1>
      )}
      <p  className="after_text">{info}</p>
      <Button href={link} variant="contained" color="primary">
        For More
      </Button>
    </div>
  );
});
