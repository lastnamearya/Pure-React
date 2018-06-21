import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Dialog({ children }) {
  let header, body, footer;
  header = body = footer = null;

  React.Children.forEach(children, child => {
    switch(child.type) {
      case Header:
        header = child;
        break;
      case Footer:
        footer = child;
        break;
      case Body:
        body = child;
        break;
      default:
        throw new Error("Dialog can only contain Header, Body, and Footer components.");
    }
  });

  return (
    <div className="modal show inline-dialog">
      <div className="modal-header">
        {header}
      </div>
      <div className="modal-body">
        {body}
      </div>
      <div className="modal-footer">
        {footer}
      </div>
    </div>
  );
}

function Header({ children }) {
  return <h4>{children}</h4>;
}
function Body({ children }) {
  return <div>{children}</div>;
}
function Footer({ children }) {
  return <div>{children}</div>;
}

function Test() {
  return (
    <Dialog>
      <Header>This Is Important</Header>
      <Body>Here is some important text or error or something.</Body>
      <Footer>
        <button className="btn btn-default">Close</button>
      </Footer>
    </Dialog>
  );
}

ReactDOM.render(
  <Test/>,
  document.querySelector('#root'));
