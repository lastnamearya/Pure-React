import React from 'react';
import ReactDOM from 'react-dom';

function NameCells() {
  return (
    <React.Fragment>
      <td>First Name</td>
      <td>Last Name</td>
    </React.Fragment>
  );
}

ReactDOM.render(
  <NameCells/>,
  document.querySelector('#root')
); 