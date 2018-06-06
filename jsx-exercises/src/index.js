import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
  let username = "Jigyasu";
  return (
    <span>
      {username ? 'Hello, ' + username : 'Not logged in'}
    </span>
  );
}

ReactDOM.render(
  <Greeting/>,
  document.getElementById('root')
);