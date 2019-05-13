import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Thumbnail from '../thumbnail/Thumbnail';
import ImageDisplay from '../imageDisplay/ImageDisplay';
import {fetchThumbnailRequest} from './InfiniteScrollActions';

export class InfiniteScroll extends Component {
    constructor(props) {
        super();
        this.state = {
            currentBigImage: ''
        };
    }

    componentDidMount() {
        const { fetchThumbnails } = this.props;
        if (typeof fetchThumbnails === 'undefined' ){
            return null;
        }
        fetchThumbnails();

        window.onscroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                fetchThumbnails();
            }
        };
    }

    handleClick = imageUrl => ()=> {
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

const mapStateToProps = (state) => {
    const { payload } = state.infiniteScroll;
    return {
        thumbnailData: payload
    };
};

const mapDispatchToProps  = dispatch => ({
    fetchThumbnails: () => dispatch(fetchThumbnailRequest())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfiniteScroll);