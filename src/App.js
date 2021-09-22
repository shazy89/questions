import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import data from './api/local/questions.json';
import { QuestionsDashboard } from './pages/questions-dashboard';
import { setQuestions } from 'redux/actions/questions-fetch';
import { Loading } from 'layout/loading';

function App({ setQuestions, loading }) {
  //  const [questionInfo, setQuestionInfo] = useState(null);

  //  const displayQuestion = useCallback(() => {
  //    setQuestionInfo(questions.find((question) => question.status === 'start'));
  //  }, [questions]);

  useEffect(() => {
    setQuestions();
  }, [setQuestions]);
  // useEffect(() => {
  //   displayQuestion();
  // }, [displayQuestion, questions]);

  return <>{loading ? <Loading /> : <QuestionsDashboard />}</>;
}

const mapStateProps = (state) => {
  return {
    loading: state.questions.loading,
    // questions: state.questions.questions,
  };
};
export default connect(mapStateProps, { setQuestions })(App);
