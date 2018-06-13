import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

function Envelope({ props }) {
  var {toPerson, fromPerson} = props;
  return (
    <div className="envelope">
      <div className="sender">
        {toPerson}
        <AddressLabel label={address}/>
      </div>
      <Stamp/>
      <div className="receiver">
        {fromPerson}
        <AddressLabel label={address}/>
      </div>
    </div>
  )
}

Envelope.propTypes = {
  props: PropTypes.object.isRequired
}

var diary = {
  toPerson: "Mrs. Receiver",
  fromPerson: "Mr. Sender"
}

function AddressLabel({ label }) {
  var {addressLine1, addressLine2} = label;
  return (
    <div>
      <div>{addressLine1}</div>
      <div>{addressLine2}</div>
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

function Stamp() {
  return (
    <span className="stamp">
      Stamp
    </span>
  )
}

ReactDOM.render(
  <Envelope
    props={diary}
  />,
  document.getElementById('root')
);