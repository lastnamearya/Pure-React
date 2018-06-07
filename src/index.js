import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Comment({ author, message, likes }) {
  return (
    <div>
      <div className="author">{author}</div>
      <div className="message">{message}</div>
      <div className="likes">
        {likes > 0 ? likes : 'No'} likes
      </div>
    </div>
  );
}

Comment.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes: PropTypes.number
}

ReactDOM.render(
  <Comment 
    author="somebody"
    message="a likeable message"
    likes={0}
  />,
  document.querySelector('#root')
);