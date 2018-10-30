import {
    ADD_LIST,
    addList,
    ADD_Item,
    addItem,
    FETCH_BOARD_SUCCESS,
    fetchBoardSuccess,
    fetchBoard
} from './dashboard';

describe('addList', () => {
    it('Should return the action', () => {
        const title = 'List title';
        const action = addList(title);
        expect(action.type).toEqual(ADD_LIST);
        expect(action.title).toEqual(title);
    });
});

describe('addItem', () => {
    it('Should return the action', () => {
        const text = 'Item text';
        const listIndex = 10;
        const action = addItem(text, listIndex);
        expect(action.type).toEqual(ADD_Item);
        expect(action.text).toEqual(text);
        expect(action.listIndex).toEqual(listIndex);
    });
});

describe('fetchBoardSuccess', () => {
    it('Should return the action', () => {
        const board = {
            lists: []
        };
        const action = fetchBoardSuccess(board);
        expect(action.type).toEqual(FETCH_BOARD_SUCCESS);
        expect(action.board).toEqual(board);
    });
});

describe('fetchBoard', () => {
    it('Should dispatch fetchBoardSuccess', () => {
        const board = {
            lists: []
        };

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return board;
                }
            })
        );

        const dispatch = jest.fn();
        return fetchBoard()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith('/board');
            expect(dispatch).toHaveBeenCalledWith(fetchBoardSuccess(board));
        });
    });
});
