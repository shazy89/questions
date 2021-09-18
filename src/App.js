import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import data from './api/local/questions.json';
import { QuestionsDashboard } from './pages/questions-dashboard';
import { setQuestions } from 'redux/actions/questions-fetch';
import { Loading } from 'layout/loading';

function App({ setQuestions, loading, questions }) {
  const [questionInfo, setQuestionInfo] = useState(null);

  useEffect(() => {
    setQuestions();
  }, [setQuestions]);
  useEffect(() => {
    setQuestionInfo(questions[0]);
  }, [questions]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        questionInfo && <QuestionsDashboard questionInfo={questionInfo} />
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
