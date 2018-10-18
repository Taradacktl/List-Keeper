import {trelloReducer} from './index';
import {addList, addItem, fetchBoardSuccess} from '../actions';

describe('trelloReducer', () => {
    // Set up some dummy data
    const list1Title = 'List 1 test';
    const list2Title = 'List 2 test';
    const item1Text = 'Item 1 test';
    const item2Text = 'Item 2 test';
    const item3Text = 'Item 3 test';
    const list1 = {
        title: list1Title,
        items: []
    };
    const list2 = {
        title: list2Title,
        items: []
    };
    const item1 = {text: item1Text};
    const item2 = {text: item2Text};
    const item3 = {text: item3Text};


    it('Should set the initial state when nothing is passed in', () => {
        const state = trelloReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            lists: []
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = trelloReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('addList', () => {
        it('Should add new lists', () => {
            let state;
            state = trelloReducer(state, addList(list1Title));
            state = trelloReducer(state, addList(list2Title));
            expect(state).toEqual({
                lists: [list1, list2]
            });
        });
    });


    describe('additem', () => {
        it('Should add new items', () => {
            let state = {
                lists: [list1, list2]
            };
            state = trelloReducer(state, addItem(item1Text, 0));
            state = trelloReducer(state, addItem(item2Text, 1));
            state = trelloReducer(state, addItem(item3Text, 1));
            expect(state).toEqual({
                lists: [{
                    title: list1Title,
                    items: [item1]
                }, {
                    title: list2Title,
                    items: [item2, item3]
                }]
            });
        });
    });

    describe('fetchBoardSuccess', () => {
        it('Should replace the entire state', () => {
            const board = {
                lists: [list1, list2]
            };
            const state = trelloReducer(undefined, fetchBoardSuccess(board));
            expect(state).toEqual(board);
        });
    });
});
