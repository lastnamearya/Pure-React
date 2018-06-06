import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className="tweet">
      Tweet
    </div>
  )
}

ReactDOM.render(
  <Tweet />,
  document.querySelector('#root')
);