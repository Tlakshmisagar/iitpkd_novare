import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TrailCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const cardStyle = {
    transform: isHovered ? "translateY(-10px)" : "translateY(0)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    position: "relative",
  };

  const loadingOverlayStyle = {
    display: imageLoaded ? "none" : "block",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#ddd", // Set your desired background color
    opacity: 0.8, // Set your desired opacity
    zIndex: 2,
  };

  return (
    <Link to={props.trailLink} className="text-decoration-none">
      <div className="col" data-aos="fade-up" data-aos-duration="1500">
        <div
          className={`card shadow-lg ${imageLoaded ? "loaded" : "loading"}`}
          style={cardStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div style={loadingOverlayStyle}></div>

          <img
            src={props.picurl}
            className={`card-img-top ${imageLoaded ? "visible" : "hidden"}`}
            alt="..."
            style={{ maxHeight: 230 + "px" }}
            onLoad={() => setImageLoaded(true)}
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
      </div>
    </Link>
  );
}
