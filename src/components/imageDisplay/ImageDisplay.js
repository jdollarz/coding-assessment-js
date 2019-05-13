import React from 'react';
import PropTypes from 'prop-types';
import './ImageDisplay.css';

const ImageDisplay = ({ imageUrl }) => {
    return (
        <div className="image-display">
            <img
                src={imageUrl}
                alt="large image"
                className="image-display__image"
            />
        </div>
    )
};

ImageDisplay.propTypes = {
    imageUrl: PropTypes.string
};
export default ImageDisplay;