import React from 'react';
import { shallow, mount } from 'enzyme';
import InfiniteScroll from './InfiniteScroll';
import Thumbnail from '../thumbnail/Thumbnail';
import ImageDisplay from '../imageDisplay/ImageDisplay';

describe('<InfiniteScroll />', () => {
    let wrapper;
    const thumbnailData = [
        {
            title: 'image 1',
            thumbnailUrl: 'https://placekitten.com/g/200/300'
        },
        {
            title: 'image 2',
            thumbnailUrl: 'https://placekitten.com/g/200/300'
        }
    ];

    beforeEach(() => {
        wrapper = shallow(<InfiniteScroll/>);
    });

    test('it renders', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    test('it displays Thumbnails when data is present', () => {
        wrapper = shallow(<InfiniteScroll thumbnailData={thumbnailData} />);
        const thumbnails = wrapper.find(Thumbnail);
        expect(thumbnails.length).toEqual(2);
    });

    // test('image display is shown when handleClick is triggered', () => {
    //   wrapper = mount(<InfiniteScroll thumbnailData={thumbnailData} />);
    //   const instance = wrapper.instance();
    //   expect(wrapper.find(ImageDisplay).length).toEqual(0);
    //   instance.handleClick('largeImageUrl');
    //
    //   wrapper.update();
    //   console.log('wrapper', wrapper.debug());
    //   expect(wrapper.find(ImageDisplay).length).toEqual(1);
    // });
});