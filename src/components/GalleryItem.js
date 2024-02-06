import React from 'react';

const GalleryItem = ({ title, image, description }) => {
    return (
        <div className="gallery-item">
            <img src={image} alt={title} />
            <div className="item-details">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default GalleryItem;
