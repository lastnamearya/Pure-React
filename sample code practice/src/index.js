import React from "react";
import ReactDOM from "react-dom";

class ErrorCatcher extends React.Component {
  state = { error: null };

  componentDidCatchError(error, info) {
    console.log("[componentDidCatch]", error);
    this.setState({ error: info.componentStack });
  }

  render() {
    if (this.state.error) {
      return <div>An error occured: {this.state.error}</div>;
    }
    return this.props.children;
  }
}

class LifeCycleDemo extends React.Component {
  // Initialize state first
  // (happens before constructor)
  state = { counter: 0 };

  // The first method called after initializing state
  constructor(props) {
    super(props);
    console.log("[constructor]");
    console.log(" State already set:", this.state);
  }

  // Called after initial render is done
  componentDidMount() {
    console.log("[componentDidMount]", "Mounted");
  }

  // ** Don't forget to make this `static` ! **
  // Called before initial render, any time new props are received
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[getDerivedStateFromProps]");
    console.log(" Next props:", nextProps);
    console.log(" Prev State:", prevState);
    return null;
  }

  // Called before each render. Return false to prevent rendering.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[shouldComponentUpdate]", "Deciding to update");
    return true;
  }

  // Called after render() but before updating the DOM
  // A good time to make calculations based on old DOM nodes.
  // The value returned here is passed into componentDidUpdate
  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log("[getSnapshotBeforeUpdate]", "About to update...");
    return `Time is ${Date.now()}`;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[componentDidUpdate]", "Updated.");
    console.log(" snapshot:", snapshot);
  }

  componentWillUnmount() {
    console.log("[componentWillUnmount]", "Goodbye cruel world.");
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  causeErrorNextRender = () => {
    // Set a flag to cause an error on the next render
    // This will cause componentDidCatch to run in the parent
    this.setState({
      causeError: true
    });
  };

  render() {
    console.log("[render]");
    if (this.state.causeError) {
      throw new Error("oh no!!");
    }

    return (
      <div>
        <span>Counter: {this.state.counter}</span>
        <button onClick={this.handleClick}>Click to increment</button>
        <button onClick={this.causeErrorNextRender}>Throw an error</button>
      </div>
    );
  }
}

ReactDOM.render(
  <ErrorCatcher>
    <LifeCycleDemo />
  </ErrorCatcher>,
  document.getElementById("root")
);
