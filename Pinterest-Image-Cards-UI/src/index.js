import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import head from './img/787.jpg';
import sub1 from './img/sub1.jpg';
import sub2 from './img/sub2.jpg';

function Pinterest({ info }) {
  return (
    <div className="card-info">
      <div className="images">
        <img src={head} alt="1" className="head-img"/>
        <div className="sub-img">
          <img src={sub1} alt="1" className="sub1"/>
          <img src={sub2} alt="1"/>
        </div>
      </div>
      <div className="description">
        <h3>Aviation</h3><p className="pins">641 Pins</p>
      </div>
      <button className="btn">Follow</button>
    </div>
  );
}

const cardList = [
  {
    id: 1,
  }
];

ReactDOM.render(
  <Pinterest
    info={cardList}
  />,
  document.getElementById('root')
);