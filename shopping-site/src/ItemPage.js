import React from "react";
import PropTypes from "prop-types";
import "./ItemPage.css";

function ItemPage({ items }) {
  return (
    <ul className="ItemPage-items">
      {items.map(item => (
        <li key={item.id} className="ItemPage-item">
          {item.name}
        </li>
      ))}
    </ul>
  );
}

ItemPage.proptypes = {
  item: PropTypes.array.isRequired
};

export default ItemPage;
