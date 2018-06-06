import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      Tweet
    </div>
  )
}

function Avatar() {
  return (
    <img
      src="https://s.gravatar.com/avatar/413b990ccd2cf5ba69d609fdba4f0302?s=80&r=x"
      className="avatar"
      alt="avatar"
    />
  );
}

ReactDOM.render(
  <Tweet />,
  document.querySelector('#root')
);