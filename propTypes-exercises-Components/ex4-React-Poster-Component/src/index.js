import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

function Poster({ props }) {
  var {img, title, text} = props;
  return (
    <div className="poster">
      <div className="image-container">
        <img src={img} alt="React" className="img"/>
      </div>
      <div className="title">{title}</div>
      <div className="text">{text}</div>
    </div>
  )
}

Poster.propTypes = {
  props: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}

var content = {
  img: "http://spyrestudios.com/wp-content/uploads/React.js_logo.svg_.png",
  title: "React",
  text: "The best thing since jQuery, probably"
}

ReactDOM.render(
  <Poster
    props={content}
  />,
  document.getElementById('root')
);