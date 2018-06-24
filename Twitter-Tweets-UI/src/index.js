import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './tweet';
import './index.css';

function TweetList({ list }) {
  return (
    <div>
      {list.map( tweet => <Tweet tweet={tweet} key={tweet.message}/>
      )}
    </div>
  )
}

var testTweet = [{
  message: "Learning React.js Full-time.",
  gravatar: "73469566/d027c3e54488c6a3bd3f297f51977fc2.png",
  author: {
    handle: "@lastnamearya",
    name: "Jigyasu Arya"
  },
  likes: 5,
  retweets: 2,
  timestamp: "2016-07-30 21:24:37"
},
{
  message: "Something about dogs.",
  gravatar: "73469566/d027c3e54488c6a3bd3f297f51977fc2.png",
  author: {
    handle: "@lastnamearya",
    name: "Jigyasu Arya"
  },
  likes: 7,
  retweets: 1,
  timestamp: "2016-07-30 21:24:37"
},
{
  message: "Something not about cats.",
  gravatar: "73469566/d027c3e54488c6a3bd3f297f51977fc2.png",
  author: {
    handle: "@lastnamearya",
    name: "Jigyasu Arya"
  },
  likes: 14,
  retweets: 102,
  timestamp: "2016-07-30 21:24:37"
},
{
  message: "Something about cats.",
  gravatar: "73469566/d027c3e54488c6a3bd3f297f51977fc2.png",
  author: {
    handle: "@lastnamearya",
    name: "Jigyasu Arya"
  },
  likes: 1,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37"
}];

ReactDOM.render(
  <TweetList list={testTweet}/>,
  document.querySelector('#root')
);