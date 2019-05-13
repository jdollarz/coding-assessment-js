import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Thumbnail from '../thumbnail/Thumbnail';
import ImageDisplay from '../imageDisplay/ImageDisplay';

class InfiniteScroll extends Component {
    constructor(props) {
        super();
        this.state = {
            currentBigImage: ''
        };
    }
    handleClick = imageUrl => ()=> {
        console.log(' handleClick', imageUrl);
        this.setState({
            currentBigImage: imageUrl
        })
    };

    renderThumbnails(){
        const { thumbnailData } = this.props;
        if (!thumbnailData) {
            return  null;
        }

        return thumbnailData.map((thumb, index) => {
            return (
                <Thumbnail
                    key={index}
                    data={thumb}
                    handleClick={this.handleClick}
                />
            );
        });
    }

    render(){
        const { currentBigImage } = this.state;
        console.log(' currentBigImage', currentBigImage);
        const imageDisplay = (currentBigImage) ? <ImageDisplay imageUrl={currentBigImage} /> : null;
        return (
            <div className="infinite-scroll">
                {this.renderThumbnails()}
                {imageDisplay}
            </div>
        );
    }
}

InfiniteScroll.propTypes = {
    thumbnailData: PropTypes.array,
};


export default InfiniteScroll;