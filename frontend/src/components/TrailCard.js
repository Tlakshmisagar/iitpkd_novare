import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function TrailCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  };
  return(
    <Link to={props.trailLink}><div className="col">
    <div className="card" style={cardStyle}
onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}>
      <img
        src={props.picurl}
        className="card-img-top"
        alt="..."
        style={{ maxHeight: 230 + "px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a
          natural lead-in to additional content. This content is a
          little bit longer.
        </p>
      </div>
    </div>
  </div></Link>
  )}