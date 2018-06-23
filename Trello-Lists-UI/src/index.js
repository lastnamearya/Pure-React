import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Taskcard({ tasks }) {
  return (
    <ul className="tasks">
      {tasks.map( task => (
        <li key={task.id}>
          {task.title}
        </li>
      ))}
    </ul>
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
  <Taskcard
    tasks={todoList}
  />,
  document.getElementById('root')
);
