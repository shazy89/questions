import React, { useEffect } from 'react';
import { connect } from 'react-redux';
//import data from './api/local/questions.json';
import { QuestionsDashboard } from './pages/questions-dashboard';
import { setQuestions } from 'redux/actions/questions-fetch';
import { Loading } from 'layout/loading';

function App({ setQuestions, loading }) {
  useEffect(() => {
    setQuestions();
  }, [setQuestions]);

  return <>{loading ? <Loading /> : <QuestionsDashboard />}</>;
}

const mapStateProps = (state) => {
  return {
    loading: state.questions.loading,
  };
};
export default connect(mapStateProps, { setQuestions })(App);
