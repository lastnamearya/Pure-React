import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithHandle author={tweet.author}/>
        <Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}

function Avatar({ hash }) {
  var url = `https://www.gravatar.com/userimage/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar"
    />
  );
}

Avatar.propTypes = {
  hash: PropTypes.string.isRequired
};

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired
};

function NameWithHandle({ author }) {
  const { name, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">
        {name}
      </span>
      <span className="handle">
        {handle}
      </span>
    </span>
  );
}

NameWithHandle.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
};

const Time = ({ time }) => {
  const timeString = Moment(time).fromNow();
  return (
    <span className="time">
      {timeString}
    </span>
  );
};

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

function getRetweetCount(count) {
  if(count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet"/>
    {getRetweetCount(count)}
  </span>
);

RetweetButton.propTypes = {
  count: PropTypes.number
};

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart"/>
    {count > 0 && 
      <span className="like-count">
        {count}
      </span>
    }
  </span>
);

LikeButton.propTypes = {
  count: PropTypes.number
};

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

export default Tweet;