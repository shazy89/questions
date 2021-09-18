import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Option } from '../components/answers/answer-options';
import { getUsersAnswer } from 'redux/actions/questions-fetch';
import { checkAnswer } from 'helpers/helper-functions';
import { AnswerType } from 'components/answers/answer-type';
//const mapStateProps = (state) => {
//  return {
//    loading: state.questions.loading,
//    questions: state.questions.questions,
//  };
//};

export const QuestionsDashboard = connect(null, { getUsersAnswer })(
  ({
    questionInfo: { options, question, answer, correct },
    getUsersAnswer,
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
    useEffect(() => {
      if (userAnswer) getUsersAnswer(checkAnswer(userAnswer, answer));
    }, [answer, getUsersAnswer, userAnswer]);

    return (
      <div className="app_container">
        <h1 className="app_question">{question && question}</h1>

        <div className={`app_options ${userAnswer && 'disabled'}`}>
          {displayOptions}
        </div>
      </div>
    );
  }
);
