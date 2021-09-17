import React from 'react';

export const QuestionsDashboard = ({ questionInfo: { options, question } }) => {
  return (
    <div className="app_container">
      <h1 className="app_question">{question}</h1>
      <div className="app_options"></div>
    </div>
  );
};
