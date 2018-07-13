import React from "react";
import ReactDOM from "react-dom";

class Content extends React.Component {
  constructor(props) {
    super(props);

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return <div className="content">Hello, World!</div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  toggleComponent() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.toggleComponent.bind(this)}>
          Toggle
          {this.state.expanded ? <Content /> : <div />}
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);