import React from 'react';
import { shallow } from 'enzyme';

import Thumbnail from './Thumbnail'

describe('<Thumbnail />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Thumbnail/>);
    });

    test('it renders', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    test.only('it renders element when data props are provided ', () => {
        const data = {
            title: 'some title',
            thumbnailUrl: 'www.some-url'
        };

        wrapper = shallow(<Thumbnail data={data} />);
        expect(wrapper.find('.thumbnail__title').text()).toEqual(data.title);
        expect(wrapper.find('.thumbnail__image').prop('src')).toEqual(data.thumbnailUrl);
    });
});