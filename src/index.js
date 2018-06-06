import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return React.createElement(
    'div',
    {/* null */},
    "Hello World"
  );
}

ReactDOM.render(
  <HelloWorld/>,
  document.querySelector('#root')
); 