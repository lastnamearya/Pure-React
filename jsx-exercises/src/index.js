import React, { Fragment } from 'react';
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
    <Fragment>
      <td>One</td>
      <td>Two</td>
      <td>Three</td>
    </Fragment>
  )
}

ReactDOM.render(
  <Table/>,
  document.getElementById('root')
);