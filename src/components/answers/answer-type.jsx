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
        <h1>Great job, that's correct!</h1>
      ) : (
        <h1>Incorrect</h1>
      )}
      <p>{info}</p>
      <Button href={link} variant="contained" color="primary">
        For More
      </Button>
    </div>
  );
});
