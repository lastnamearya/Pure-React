import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

function CreditCard({ cardInfo }) {
  var {person, expiration, creditCard, bankName} = cardInfo;
  return (
    <div className="credit-card">
      <div className="bank-name">{bankName}</div>
      <div className="card-number">{creditCard}</div>
      <div className="first-four-digits">{creditCard.substring(0, 4)}</div>
      <div className="expiration">
        <span className="valid-thru">VALID THRU</span> {expiration}
      </div>
      <div className="name">{person}</div>
    </div>
  );
}

CreditCard.propTypes = {
  cardInfo: PropTypes.shape({
    person: PropTypes.string.isRequired,
    expiration: PropTypes.string.isRequired,
    creditCard: PropTypes.string.isRequired,
    bankName: PropTypes.string.isRequired
  }).isRequired
};

const details = {
  person: "Jigyasu",
  expiration: "08 / 19",
  creditCard: "1234 5678 8765 4321",
  bankName: "Big Bank, Inc"
}

ReactDOM.render(
  <CreditCard
    cardInfo={details}
  />,
  document.querySelector('#root')
);