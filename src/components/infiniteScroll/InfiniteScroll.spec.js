import React from 'react';
import { shallow } from 'enzyme';
import InfiniteScroll from './InfiniteScroll';
import Thumbnail from '../thumbnail/Thumbnail';

describe('<InfiniteScroll />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<InfiniteScroll/>);
    });

    test('it renders', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    test('it displays Thumbnails when data is present', () => {
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

        wrapper = shallow(<InfiniteScroll thumbnailData={thumbnailData} />);
        const thumbnails = wrapper.find(Thumbnail);
        expect(thumbnails.length).toEqual(2);
    });
});