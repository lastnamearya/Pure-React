import React from 'react';
import ReactDOM from 'react-dom';

function ValidIndicator() {
  var isValid = true;
  return (
    <span>{isValid ? 'valid' : 'not valid'}</span>
  );
}

ReactDOM.render(
  <ValidIndicator/>,
  document.querySelector('#root')
); 