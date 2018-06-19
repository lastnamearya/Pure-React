import React from 'react';
import ReactDOM from 'react-dom';

function Nav({ children }) {
  let items = React.Children.toArray(children);
  for(let i = items.length - 1; i >= 1; i--) {
    items.slice(i, 0,
      <span key={i} className="separator">|</span>
    );
  }
  return (
    <div>{items}</div>
  );
}

ReactDOM.render(
  <IconButton 
    children={"Do The Thing"}
  />,
  document.querySelector('#root')
);