import React from 'react';
import ReactDOM from 'react-dom';

function MyThingJSX() {
  return React.createElement(
    "div",
    { className: "book" },
    React.createElement(
      "div",
      { className: "title" },
      "The Title"
    ),
    React.createElement(
      "div",
      { className: "author" },
      "The Author"
    ),
    React.createElement(
      "ul",
      { className: "stats" },
      React.createElement(
        "li",
        { className: "rating" },
        "5 Stars"
      ),
      React.createElement(
        "li",
        { className: "isbn" },
        "12-345678-910"
      )
    )
  );
}

// function MyThing() {
//   return (
//     <div className="book">

//       <div className="title">
//         The Title
//       </div>

//       <div className="author">
//         The Author
//       </div>

//       <ul className="stats">

//         <li className="rating">
//           5 Stars
//         </li>

//         <li className="isbn">
//           12-345678-910
//         </li>

//       </ul>

//     </div>
//   );
// }

ReactDOM.render(
  <MyThingJSX/>,
  document.getElementById('root')
);