import React from 'react';
import './UserCard.css';

// React Props are like function arguments in JavaScript and attributes in HTML.
const UserCard = (props) => {
  return (
    <div className="card" style={props.style}>
      {props.image && <img src={props.image} className="card-img-top" alt={props.title} />}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.content}</p>
        <a href="#" className="btn btn-success">Go somewhere</a>
      </div>
    </div>
  );
};

export default UserCard;
