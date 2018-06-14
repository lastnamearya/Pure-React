import React from 'react';
import ReactDOM from 'react-dom';

function IconButton({ children }) {
  return (
    <button>
      <i className="target-icon"/>
      {children}
    </button>
  );
}

ReactDOM.render(
  <IconButton 
    children={"Do The Thing"}
  />,
  document.querySelector('#root')
);