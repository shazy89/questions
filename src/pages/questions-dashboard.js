import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import { Option } from '../components/answers/answer-options';
import {
  getUsersAnswer,
  updatTheNextQuestion,
} from 'redux/actions/questions-fetch';
import { AnswerType } from 'components/answers/answer-type';
import { Button } from '@material-ui/core';
import { space } from 'infrastructure/questionsStyle';
import { BoxHeader } from 'components/box-header';

const mapStateProps = (state) => {
  return {
    questions: state.questions.questions,
  };
};

export const QuestionsDashboard = connect(mapStateProps, {
  getUsersAnswer,
  updatTheNextQuestion,
})(({ questions, getUsersAnswer, updatTheNextQuestion }) => {
  const [questionInfo, setQuestionInfo] = useState(null);
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState({
    amountQuestions: 0,
    questionNumber: 1,
  });

  const displayQuestion = useCallback(() => {
    setQuestionInfo(questions.find((question) => question.status === 'start'));
  }, [questions]);

  useEffect(() => {
    displayQuestion();
    setProgress({ ...progress, amountQuestions: questions.length });
  }, [displayQuestion, questionInfo?.status]);

  const displayOptions = questionInfo?.options.map((option, index) => (
    <Option
      key={index}
      option={option}
      index={index + 1}
      setQuestionInfo={setQuestionInfo}
      questionInfo={questionInfo}
      correctAnswer={questionInfo.correctAnswer}
    />
  ));

  useEffect(() => {
    if (questionInfo && questionInfo.isCorrect !== null) {
      getUsersAnswer(questionInfo);
      setTimeout(() => {
        setShow(true);
      }, 800);
    }
  }, [questionInfo?.isCorrect, getUsersAnswer]);

  const nextQuestion = () => {
    updatTheNextQuestion({ ...questionInfo, status: 'finished' });
    setProgress({ ...progress, questionNumber: progress.questionNumber + 1 });
    setShow(false);
  };

  return (
    <div className="app_container">
      <BoxHeader progress={progress} />
      <div className="question_box">
        {show && questionInfo ? (
          <AnswerType
            questionInfo={questionInfo && questionInfo}
            target="_blank"
          />
        ) : (
          <>
            <h1 className="app_question">{questionInfo?.question}</h1>
            <div
              className={`app_options ${space.top_md} ${
                questionInfo?.isCorrect && 'disabled'
              }`}
            >
              {displayOptions}
            </div>
          </>
        )}
        {show && (
          <Button
            className={`${space.top_ls} ${
              questionInfo?.isCorrect ? `after_correct` : 'after_incorrect'
            }`}
            size="large"
            variant="contained"
            onClick={nextQuestion}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
});
