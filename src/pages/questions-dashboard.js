import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Option } from '../components/answers/answer-options';

const mapStateProps = (state) => {
  return {
    loading: state.questions.loading,
    questions: state.questions.questions,
  };
};

export const QuestionsDashboard = connect(mapStateProps)(
  ({
    questionInfo: { options, question, answer, getUsersAnswer },
    loading,
  }) => {
    const [userAnswer, setUserAnswer] = useState(null);
    const displayOptions = options.map((option, index) => (
      <Option
        key={index}
        option={option}
        index={index + 1}
        setUserAnswer={setUserAnswer}
        correctAnswer={answer}
        userAnswer={userAnswer}
      />
    ));
    console.log(loading);
    return (
      <div className="app_container">
        <h1 className="app_question">{question}</h1>

        <div className={`app_options ${userAnswer && 'disabled'}`}>
          {displayOptions}
        </div>
      </div>
    );
  }
);
