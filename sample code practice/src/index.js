import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function customValidator(props, propName, componentName) {
  // here, propName === "myCustomProp"
  if (props[propName].length !== 3) {
    return new Error (
      'Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Length is not 3.'
    );
  }
}

const CustomTest = ({ myCustomProp }) => (
  <span>{myCustomProp}</span>
);

CustomTest.propTypes = {
  myCustomProp: customValidator
}

ReactDOM.render(
  <CustomTest
    myCustomProp={[1, 2, 3]}
  />,
  document.querySelector('#root')
);