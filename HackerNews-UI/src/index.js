import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function HackerNews({ stories }) {
  return (
    <div>
      <div className="header">
        <h3>Hacker News</h3>
      </div>
      <ol className="stories">
        {stories.map( story => <News headline={story} key={story.id}/>)}
      </ol>
    </div>
  )
}

function News({ headline }) {
  return (
    <div className="news-pack">
      <li>{headline.news}</li>
      <div className="subtext">
        {`${headline.extra.points} by ${headline.extra.user} 2 Years ago | flag | hide | ${headline.extra.comments}` }
      </div>
    </div>
  )
}

const newsList = [{
  id: 0,
  news: "Salesforce buys word processing app Quip for $750M",
  extra: {
    points: 154,
    user: "rhc2104",
    comments: 84
  }
},
{
  id: 1,
  news: "Youtube's road to HTTPS",
  extra: {
    points: 180,
    user: "seanwatson",
    comments: 63
  }
},
{
  id: 2,
  news: "Seymour Papert has died",
  extra: {
    points: 154,
    user: "j4mie",
    comments: 84
  }
},
{
  id: 3,
  news: "FCC Reaches Settlement with TP-Link in WI-FI Router Investigation",
  extra: {
    points: 487,
    user: "pentago",
    comments: 89
  }
},
{
  id: 4,
  news: "Ask HN: Who is hiring? (August 2016)",
  extra: {
    points: 83,
    user: "whoishiring",
    comments: 23
  }
},
{
  id: 5,
  news: "The vanishing civility: The game of jerks, bozos and assholes",
  extra: {
    points: 368,
    user: "ajuajef",
    comments: 620
  }
},
{
  id: 6,
  news: "Surprises of the Faraday Cage",
  extra: {
    points: 95,
    user: "dimitri",
    comments: 73
  }
},
{
  id: 7,
  news: "Hi geeks, hope you're breaking things over there!!",
  extra: {
    points: 273,
    user: "popeye",
    comments: 46
  }
},{
  id: 8,
  news: "Reverse engineering and removing Pokemon GO's certificate pinning",
  extra: {
    points: 27,
    user: "dog04",
    comments: 12
  }
},{
  id: 9,
  news: "NETFLIX Billing Migration to AWS - Part III",
  extra: {
    points: 63,
    user: "mouse01",
    comments: 29
  }
},{
  id: 10,
  news: "Hi geeks, hope you're breaking things over there!!",
  extra: {
    points: 92,
    user: "lastnamearya",
    comments: 33
  }
}
];

ReactDOM.render(
  <HackerNews
    stories={newsList}
  />,
  document.getElementById('root')
);