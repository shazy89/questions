import React, { useState } from 'react';
import { Option } from '../components/answer-options';
export const QuestionsDashboard = ({ questionInfo: { options, question } }) => {
  const [show, setShow] = useState(false);
  const displayOptions =
    options &&
    options.map((option, index) => <Option key={index} option={option} />);
  return (
    <div className="app_container">
      {show && <h1 className="app_question">ERDO</h1>}
      <h1 className="app_question">{question}</h1>

      <div className="app_options">{displayOptions}</div>
      <button onClick={() => setShow(true)}>CLick</button>
    </div>
  );
};
