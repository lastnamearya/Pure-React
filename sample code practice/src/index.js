import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class RefInput extends React.Component {
  showValue = () => {
    alert(`Input contains: ${this.input.value}`);
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          ref={input => this.input = input}
        />
        <button onClick={this.showValue}>
          Alert the Value!
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <RefInput/>,
  document.getElementById('root')
);