import React from 'react';
import {shallow} from 'enzyme';

import {Board} from './board';
import List from './list';
import {addList} from '../actions/dashboard';

// Mock the async fetchBoard action
const mockFetchBoardAction = {
    type: 'FETCH_BOARD'
};
jest.mock('../actions/dashboard', () => Object.assign({},
    require.requireActual('../actions/dashboard'),
    {
        fetchBoard: jest.fn().mockImplementation(() => {
            return mockFetchBoardAction;
        })
    }
));

describe('<Board/>', () => {
    let seedLists = [];
    beforeAll(() => {
        for (let i=0; i<10; i++) {
            seedLists.push({
                title: `List ${i}`,
                items: []
            })
        }
    });

    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<Board title="Foo" lists={[]} dispatch={dispatch} />);
    });

    it('Dispatches fetchBoard on mount', () => {
        const dispatch = jest.fn();
        shallow(<Board title="Foo" lists={[]} dispatch={dispatch} />);
        expect(dispatch).toHaveBeenCalledWith(mockFetchBoardAction);
    });

    it('Renders the title', () => {
        const dispatch = jest.fn();
        const title = "Foo";
        const description = "Bar";
        const wrapper = shallow(
            <Board title={title} description={description} lists={[]} dispatch={dispatch} />
        );
        expect(wrapper.contains(<h2>{title}</h2>)).toEqual(true);
        expect(wrapper.contains(<h3>{description}</h3>)).toEqual(true);
    });

    it('Dispatches addList from addList', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(
            <Board lists={[]} dispatch={dispatch} />
        );
        // Ignore any previous calls to dispatch
        dispatch.mockClear();
        const instance = wrapper.instance();
        const title = seedLists[0].title;
        instance.addList(title);
        expect(dispatch).toHaveBeenCalledWith(addList(title));
    });

    it('Renders the lists', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Board lists={seedLists} dispatch={dispatch} />);
        const lists = wrapper.find(List);
        expect(lists.length).toEqual(seedLists.length);
        const firstList = lists.first();
        expect(firstList.prop('title')).toEqual(seedLists[0].title);
    });
});


