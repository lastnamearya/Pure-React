import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Board({ lists }) {
  return (
    <div className="board">
      <h4 className="board-title">Trello Lists</h4>
      <div className="board-lists">
        {lists.map( list => <Taskcard tasks={list} key={list.id}/>)}
      </div>
    </div>
  )
}

function Taskcard({ tasks }) {
  return (
    <div className="list">
      <div className="list-title">{tasks.title}</div>
      <ul>
        {tasks.cards.map( task => (
          <li key={task.id} className="list-item">
            {task.title}
          </li>
        ))}
      </ul>
      <div className="add-card">Add a card...</div>
    </div>
  );
}

const todoList = [
  {
    id: 0,
    title: "Phone Features",
    cards: [
      {
        "id": 0,
        "title": "Subwoofer"
      },
      {
        "id": 1,
        "title": "Non-porus, washable"
      },
      {
        "id": 2,
        "title": "Wings"
      },
      {
        "id": 3,
        "title": "Beveled Bezel"
      },
      {
        "id": 4,
        "title": "Bezeled Bevel"
      },
      {
        "id": 5,
        "title": "Seedless"
      }
    ]},
  {
    id: 1,
    title: 'Lyrics',
    cards: [
      {
        id: 0,
        title: 'This was a triumph'
      },
      {
        id: 1,
        title: "I'm making a note here"
      },
      {
        id: 2,
        title: 'HUGE SUCCESS'
      },
      {
        id: 3,
        title: "It's hard to overstate my satisfaction"
      }
    ]},
    {
      id: 3,
      title: "Another Phone Features Card",
      cards: [
        {
          "id": 0,
          "title": "Subwoofer"
        },
        {
          "id": 1,
          "title": "Non-porus, washable"
        },
        {
          "id": 2,
          "title": "Wings"
        },
        {
          "id": 3,
          "title": "Beveled Bezel"
        },
        {
          "id": 4,
          "title": "Bezeled Bevel"
        },
        {
          "id": 5,
          "title": "Seedless"
        }
  ]},
  {
    id: 3,
    title: 'Another Lyrics Card',
    cards: [
      {
        id: 0,
        title: 'This was a triumph'
      },
      {
        id: 1,
        title: "I'm making a note here"
      },
      {
        id: 2,
        title: 'HUGE SUCCESS'
      },
      {
        id: 3,
        title: "It's hard to overstate my satisfaction"
      }
    ]}
];

ReactDOM.render(
  <Board
    lists={todoList}
  />,
  document.getElementById('root')
);