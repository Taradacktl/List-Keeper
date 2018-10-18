import React from 'react';
import {shallow} from 'enzyme';

import Item from './item';

describe('<Item />', () => {
    it('Renders without crashing', () => {
        shallow(<Item text="Foo" />);
    });

    it('Renders the text', () => {
        const text = "Foo";
        const wrapper = shallow(<Item text={text} />);
        expect(wrapper.text()).toEqual(text);
    });
});


