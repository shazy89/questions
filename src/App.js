import data from './api/local/questions.json';
import React, { useState, useEffect, useCallback } from 'react';
import { QuestionsDashboard } from './pages/questions-dashboard';
function App() {
  const [questionInfo, setQuestionInfo] = useState('');

  const questionsRequest = (select = 'me') => {
    return new Promise((resolve, reject) => {
      const mock = data;

      if (!mock) {
        reject('not found');
      }
      resolve(mock);
    });
  };

  const getData = useCallback(() => {
    questionsRequest()
      .then((results) => {
        setQuestionInfo(results.questionUno);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  console.log(questionInfo);
  return (
    <div className="App">
      <QuestionsDashboard questionInfo={questionInfo} />
    </div>
  );
}

export default App;
