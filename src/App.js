import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import data from './api/local/questions.json';
import { QuestionsDashboard } from './pages/questions-dashboard';
import { setQuestions } from 'redux/actions/questions-fetch';
import { Loading } from 'layout/loading';

function App({ setQuestions, loading, questions }) {
  const [questionInfo, setQuestionInfo] = useState(null);

  const displayQuestion = useCallback(() => {
    setQuestionInfo(
      questions.filter((question) => question.status === 'start')
    );
  }, [questions]);

  useEffect(() => {
    setQuestions();
  }, [setQuestions]);
  useEffect(() => {
    displayQuestion();
  }, [displayQuestion, questions]);
  console.log(questionInfo);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        questionInfo && <QuestionsDashboard questionInfo={questionInfo[0]} />
      )}
    </>
  );
}

const mapStateProps = (state) => {
  return {
    loading: state.questions.loading,
    questions: state.questions.questions,
  };
};
export default connect(mapStateProps, { setQuestions })(App);
