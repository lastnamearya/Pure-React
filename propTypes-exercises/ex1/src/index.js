import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

function AddressLabel({ label }) {
  return (
    <div>
      <div>{label.name}</div>
      <div>{label.addressLine1}</div>
      <div>{label.addressLine2}</div>
    </div>
  );
}

AddressLabel.propTypes = {
  label: PropTypes.shape({
    name: PropTypes.string.isRequired,
    addressLine1: PropTypes.string.isRequired,
    addressLine2: PropTypes.string.isRequired
  }).isRequired
};

var address = {
  name: 'Full Name',
  addressLine1: '123 Fake St.',
  addressLine2: 'Boston, MA 02118'
}

ReactDOM.render(
  <AddressLabel 
    label={address}
  />, 
  document.getElementById('root')
);
