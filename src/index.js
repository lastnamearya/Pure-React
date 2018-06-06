import React from 'react';
import ReactDOM from 'react-dom';

function ManyChildren() {
  return React.createElement(
    'div',
    {},
    React.createElement('div', {}, 'child1'),
    React.createElement('div', {}, 'child2',
      React.createElement('div', {}, 'child2_child')
    )
  );
}

ReactDOM.render(
  <ManyChildren/>,
  document.querySelector('#root')
); 