import React, { useState } from 'react';
import { Option } from '../components/answer-options';
export const QuestionsDashboard = ({
  questionInfo: { options, question, answer },
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const displayOptions =
    options &&
    options.map((option, index) => (
      <Option
        key={index}
        option={option}
        index={index + 1}
        setUserAnswer={setUserAnswer}
      />
    ));
  console.log();
  return (
    <div className="app_container">
      <h1 className="app_question">{question}</h1>

      <div className="app_options">{displayOptions}</div>
    </div>
  );
};
