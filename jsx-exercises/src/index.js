import React from 'react';
import ReactDOM from 'react-dom';

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <Data/>
        </tr>
      </tbody>
    </table>
  );
}

function Data() {
  return (
    <React.Fragment>
      <td>One</td>
      <td>Two</td>
      <td>Three</td>
    </React.Fragment>
  )
}

ReactDOM.render(
  <Table/>,
  document.getElementById('root')
);