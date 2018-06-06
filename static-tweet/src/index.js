import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle/> <Time/>
        <Message/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton/>
          <MoreOptionsButton/>
        </div>
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

const Time = () => (
  <span className="time">3h ago</span>
);

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(
  <Tweet />,
  document.querySelector('#root')
);