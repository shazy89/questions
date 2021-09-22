import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Option } from '../components/answers/answer-options';
import { getUsersAnswer } from 'redux/actions/questions-fetch';
import { checkAnswer } from 'helpers/helper-functions';
import { AnswerType } from 'components/answers/answer-type';
import { Button } from '@material-ui/core';
import { space } from 'infrastructure/questionsStyle';
const mapStateProps = (state) => {
  return {
    questions: state.questions.questions,
  };
};
//: { options, question, answer, correct, info, link }
export const QuestionsDashboard = connect(mapStateProps, { getUsersAnswer })(
  ({ questions, getUsersAnswer }) => {
    const [questionInfo, setQuestionInfo] = useState(null);
    const [userAnswer, setUserAnswer] = useState(null);
    const [show, setShow] = useState(false);

    const displayQuestion = useCallback(() => {
      setQuestionInfo(
        questions.find((question) => question.status === 'start')
      );
    }, [questions]);

    useEffect(() => {
      displayQuestion();
    }, [displayQuestion, questionInfo?.status]);

    const displayOptions = questionInfo?.options.map((option, index) => (
      <Option
        key={index}
        option={option}
        index={index + 1}
        setUserAnswer={setUserAnswer}
        correctAnswer={questionInfo.answer}
        userAnswer={userAnswer}
      />
    ));
    useEffect(() => {
      if (userAnswer) {
        getUsersAnswer(checkAnswer(userAnswer, questionInfo?.answer));
        setTimeout(() => {
          setShow(true);
        }, 1500);
      }
    }, [questionInfo?.answer, getUsersAnswer, userAnswer]);
    // find the reason why when we select corrct or incorrect option
    // it is changeing the screen imidiatly
    return (
      <div className="app_container">
        {show ? (
          <AnswerType
            info={questionInfo?.info}
            target="_blank"
            link={questionInfo?.link}
          />
        ) : (
          <>
            <h1 className="app_question">{questionInfo?.question}</h1>
            <div className={`app_options ${userAnswer && 'disabled'}`}>
              {displayOptions}
            </div>
          </>
        )}
        {show && (
          <Button
            className={`${space.top_ls} ${
              questionInfo?.correct ? `after_correct` : 'after_incorrect'
            }`}
            size="large"
            variant="contained"
          >
            Continue
          </Button>
        )}
      </div>
    );
  }
);
