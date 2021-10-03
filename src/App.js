import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
//import data from './api/local/questions.json';
import { QuestionsDashboard } from './pages/questions-dashboard';
import { setQuestions } from 'redux/actions/questions-fetch';
import { Loading } from 'layout/loading';

function App({ setQuestions, loading }) {
  const [resetQuestions, setResetQuestions] = useState(false);

  useEffect(() => {
    setQuestions();
    if (resetQuestions) {
      setResetQuestions(false);
    }
  }, [setQuestions, resetQuestions]);

  return loading ? (
    <Loading />
  ) : (
    <QuestionsDashboard setResetQuestions={setResetQuestions} />
  );
}

const mapStateProps = (state) => {
  return {
    loading: state.questions.loading,
  };
};
export default connect(mapStateProps, { setQuestions })(App);
