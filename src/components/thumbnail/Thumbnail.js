import React from 'react';
import './Thumbnail.css';

const Thumbnail = data => {
    if (!data.data) {
        return null;
    }
    const { title, thumbnailUrl} = data.data;

    return (
      <div className="thumbnail">
          <div className="thumbnail__title">
              {title}
          </div>
          <img src={thumbnailUrl} className="thumbnail__image" />
      </div>
    );
};

export default Thumbnail;