import React from 'react';
import { shallow } from 'enzyme';
import InfiniteScroll from './InfiniteScroll';

describe('<InfiniteScroll />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<InfiniteScroll/>);
    });

    test('it renders', () => {
        expect(wrapper.exists()).toEqual(true);
    });
});