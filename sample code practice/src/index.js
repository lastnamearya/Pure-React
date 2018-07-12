import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Example extends Component {
  state = { text: ' '};

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }
    render() {
      return (
        <input type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
      );
    }
  }

ReactDOM.render(
  <Example/>,
  document.getElementById('root')
);