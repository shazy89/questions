import React from 'react';

export const Option = ({ option, index }) => {
  return <span className="app_option">{`${index}) ${option}`}</span>;
};
