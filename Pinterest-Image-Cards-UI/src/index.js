import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import head from './img/787.jpg';
import sub1 from './img/sub1.jpg';
import sub2 from './img/sub2.jpg';


function Cards({ data }) {
  return (
    <div className="board">
      {data.map( card => <Pinterest info={card} key={card.id}/>)}
    </div>
  )
}

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
        <h3>{info.title}</h3><p className="pins">{`${info.pins} pins`}</p>
      </div>
      <button className="btn">Follow</button>
    </div>
  );
}

const cardList = [
  {
    id: 1,
    title: "AVIATION",
    pins: 641
  },
  {
    id: 2,
    title: "Exceptional Aviation",
    pins: 209
  },
  {
    id: 3,
    title: "Aerospace",
    pins: 1545
  }
];

ReactDOM.render(
  <Cards
    data={cardList}
  />,
  document.getElementById('root')
);