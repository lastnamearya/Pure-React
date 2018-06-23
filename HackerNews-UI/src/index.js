import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function HackerNews({ stories }) {
  return (
    <ol>
      {stories.map( story => <News news={story} key={story.id}/>)}
    </ol>
  )
}

function News({ news }) {
  return (
    <li>{news.news}</li>
  )
}

const newsList = [{
  id: 0,
  news: "Hi geeks, hope you're breaking things over there!!"
}];

ReactDOM.render(
  <HackerNews
    stories={newsList}
  />,
  document.getElementById('root')
);