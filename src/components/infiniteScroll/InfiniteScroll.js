import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Thumbnail from '../thumbnail/Thumbnail';

class InfiniteScroll extends Component {
    renderThumbnails(){
        const { thumbnailData } = this.props;
        if (!thumbnailData) {
            return  null;
        }

        return thumbnailData.map((thumb, index) => {
            return <Thumbnail key={index} data={thumb} />;
        });
    }

    render(){
        return (
            <div className="infinite-scroll">
                {this.renderThumbnails()}
            </div>
        );
    }
}

InfiniteScroll.propTypes = {
    thumbnailData: PropTypes.array,
};


export default InfiniteScroll;