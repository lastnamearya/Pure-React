import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

function CreditCard({ cardInfo }) {
  return(
    <div className="credit-card">
      <div className="bank-name">
        {cardInfo.bankName}
      </div>
      <div className="card-number">
        {cardInfo.creditCard}
      </div>
      <div className="first-four-digits">
        {cardInfo.creditCard.substring(0, 4)}
      </div>
      <div className="expiration">
        <span className="valid-thru">VALID THRU</span> {cardInfo.expiration}
      </div>
      <div className="name">{cardInfo.person}</div>
    </div>
  );
}

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