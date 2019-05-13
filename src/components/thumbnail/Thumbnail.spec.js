import React from 'react';
import { shallow } from 'enzyme';

import Thumbnail from './Thumbnail'

describe('<Thumbnail />', () => {
    let wrapper;
    const data = {
        title: 'some title',
        thumbnailUrl: 'www.some-url',
        imageUrl: 'some-image.url'
    };

    test('it renders', () => {
        wrapper = shallow(<Thumbnail/>);
        expect(wrapper.exists()).toEqual(true);
    });

    test('it renders element when data props are provided ', () => {
        wrapper = shallow(<Thumbnail data={data} handleClick={() => {}} />);
        expect(wrapper.find('.thumbnail__title').text()).toEqual(data.title);
        expect(wrapper.find('.thumbnail__image').prop('src')).toEqual(data.thumbnailUrl);
    });

    test('handle image click', () => {
        const props = {
            data,
            handleClick: jest.fn(),
        };
        const expectedImage = 'some-image.url';
        wrapper = shallow(<Thumbnail {...props} />);

        const image = wrapper.find('img');
        image.simulate('click');

        expect(props.handleClick.mock.calls.length).toEqual(1);
        expect(props.handleClick.mock.calls[0][0]).toEqual(expectedImage);
    });
});