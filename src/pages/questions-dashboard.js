import React, { useState } from 'react';
import { Option } from '../components/answers/answer-options';
export const QuestionsDashboard = ({
  questionInfo: { options, question, answer },
}) => {
  const [userAnswer, setUserAnswer] = useState(null);
  const displayOptions = options.map((option, index) => (
    <Option
      key={index}
      option={option}
      index={index + 1}
      setUserAnswer={setUserAnswer}
      correctAnswer={answer}
      userAnswer={userAnswer}
    />
  ));

  return (
    <div className="app_container">
      <h1 className="app_question">{question}</h1>

      <div className={`app_options ${userAnswer && 'disabled'}`}>
        {displayOptions}
      </div>
    </div>
  );
};
