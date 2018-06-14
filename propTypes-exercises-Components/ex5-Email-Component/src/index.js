import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

function Email({ email }) {
  var { sender, subject, date, message } = email;
  return (
    <div className="email">
      <input type="checkbox"/>
      <i className="fa fa-thumb-tack pin"/>
      <div className="content">
        <div className="line1">
          <span className="sender">{sender}</span>
          <span className="subject">{subject}</span>
          <span className="date">{date}</span>
        </div>
        <div className="message">{message}</div>
      </div>
    </div>
  );
}

Email.proptypes = {
  email: PropTypes.shape({
    sender: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired
};

var emailData = {
  sender: "React Newsletter",
  subject: "React Newsletter - Issue 36",
  date: "Jul 15",
  message: "React Newsletter Issue 36 - July 15 2016 Read this issue on the web http://reactjsnewletter.com/issues/36?sid=3QGDBC###Comme"
}

ReactDOM.render(
  <Email 
    email={emailData}
  />,
  document.getElementById('root')
);