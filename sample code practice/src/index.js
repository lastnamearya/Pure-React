import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const RefInputStateless = () => {
  let input;

  const showValue = () => {
    alert(`Input contains: ${input.value}`);
  }

  return (
    <div>
      <input
        type="text"
        ref={i => input = i}
      />
      <button onClick={showValue}>
        Alert the Value!
      </button>
    </div>
  )

}

ReactDOM.render(
  <RefInputStateless/>,
  document.getElementById('root')
);