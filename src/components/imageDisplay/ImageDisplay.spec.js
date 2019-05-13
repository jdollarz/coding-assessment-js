import React from 'react';
import {shallow} from 'enzyme';
import ImageDisplay from './ImageDisplay'


describe('<ImageDisplay />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ImageDisplay/>);
    });

    test('it renders', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    test('it renders image from when imageUrl prop is passed', () => {
        const props = { imageUrl: 'large.image.url' }
        wrapper = shallow(<ImageDisplay {...props} />);
    });
});