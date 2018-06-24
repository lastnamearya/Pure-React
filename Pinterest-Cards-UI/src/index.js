import React from 'react';
import ReactDOM from 'react-dom';
import top from './img/top.jpg';
import './index.css';

function Cards({ data }) {
  return (
    <React.Fragment>
      <Header/>
      <div className="board">
        {data.map( card => <Pinterest info={card} key={card.id}/>)}
      </div>
    </React.Fragment>
  );
}

function Pinterest({ info }) {
  return (
    <div className="card-info">
      <div className="images">
        <img src={info.mainImg} alt="1" className="head-img"/>
        <div className="sub-img">
          <img src={info.subImg1} alt="1" className="sub1"/>
          <img src={info.subImg2} alt="1"/>
        </div>
      </div>
      <div className="description">
        <h3>{info.title}</h3><p className="pins">{`${info.pins} pins`}</p>
      </div>
      <button className="btn">Follow</button>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img src={top} className="aviation" alt="Aviation Explorer"/>
      <h1>Aviation Explorer</h1>
    </div>
  );
}



const cardList = [
  {
    id: 1,
    title: "AVIATION",
    pins: 641,
    mainImg: require('./img/787.jpg'),
    subImg1: require('./img/sub1.jpg'),
    subImg2: require('./img/sub2.jpg')
  },
  {
    id: 2,
    title: "Exceptional Aviation",
    pins: 209,
    mainImg: require('./img/787.jpg'),
    subImg1: require('./img/sub1.jpg'),
    subImg2: require('./img/sub2.jpg')
  },
  {
    id: 3,
    title: "Aerospace",
    pins: 1545,
    mainImg: require('./img/787.jpg'),
    subImg1: require('./img/sub1.jpg'),
    subImg2: require('./img/sub2.jpg')
  },
  {
    id: 4,
    title: "Airline Timetables",
    pins: 321,
    mainImg: require('./img/787.jpg'),
    subImg1: require('./img/sub1.jpg'),
    subImg2: require('./img/sub2.jpg')
  }
];

ReactDOM.render(
  <Cards
    data={cardList}
  />,
  document.getElementById('root')
);