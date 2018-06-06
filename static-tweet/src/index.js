import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle/>
        <Message/>
      </div>
    </div>
  );
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

function Message() {
  return (
    <div className="message">
      This is less than 140 characters.
    </div>
  );
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">
        Jigyasu Arya
      </span>
      <span className="handle">
        @lastnamearya
      </span>
    </span>
  );
}

ReactDOM.render(
  <Tweet />,
  document.querySelector('#root')
);