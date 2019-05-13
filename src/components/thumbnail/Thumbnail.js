import React from 'react';
import PropTypes from 'prop-types';

import './Thumbnail.css';

const Thumbnail = ({data, handleClick}) => {
    if (!data) {
        return null;
    }

    const { title, thumbnailUrl, imageUrl} = data;

    return (
      <div className="thumbnail">
          <div className="thumbnail__title">
              {title}
          </div>
          <img
              src={thumbnailUrl}
              className="thumbnail__image"
              onClick={handleClick(imageUrl)}
          />
      </div>
    );
};

Thumbnail.propTypes = {
    data: PropTypes.object,
    handleClick: PropTypes.func
};
export default Thumbnail;