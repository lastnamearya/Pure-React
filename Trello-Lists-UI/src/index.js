import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Board({ lists }) {
  return (
    <div className="board">
      <h4 className="board-title">Trello Lists</h4>
      <div className="board-lists">
        <Taskcard tasks={lists}/>
      </div>
    </div>
  )
}

function Taskcard({ tasks }) {
  return (
    <div className="list">
      <div className="list-title">Phone Features</div>
      <ul>
        {tasks.map( task => (
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
  },
];

ReactDOM.render(
  <Board
    lists={todoList}
  />,
  document.getElementById('root')
);