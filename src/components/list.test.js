import React from 'react';
import {shallow} from 'enzyme';

import {List} from './list';
import Item from './item';
import {addItem} from '../actions';

describe('<List />', () => {
    const seedItems = [];
    beforeAll(() => {
        for (let i=0; i<10; i++) {
            seedItems.push({
                text: `Item ${i}`
            })
        }
    });

    it('Renders without crashing', () => {
        shallow(<List title="Foo" items={[]} />);
    });

    it('Renders the title', () => {
        const title = "Foo";
        const wrapper = shallow(<List title={title} items={[]} />);
        expect(wrapper.contains(<h3>{title}</h3>)).toEqual(true);
    });

    it('Dispatches addItem from addItem', () => {
        const dispatch = jest.fn();
        const index = 2;
        const wrapper = shallow(
            <List items={[]} index={index} dispatch={dispatch} />
        );
        const instance = wrapper.instance();
        const text = seedItems[0].text;
        instance.addItem(text);
        expect(dispatch).toHaveBeenCalledWith(addItem(text, index));
    });

    it('Renders the items', () => {
        const wrapper = shallow(<List items={seedItems} />);
        const items = wrapper.find(Item);
        expect(items.length).toEqual(seedItems.length);
        const firstItem = items.first();
        expect(firstItem.prop('text')).toEqual(seedItems[0].text);
    });
});


