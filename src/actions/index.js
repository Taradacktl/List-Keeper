export const ADD_LIST = 'ADD_LIST';
export const addList = title => ({
    type: ADD_LIST,
    title
});

export const ADD_Item = 'ADD_Item';
export const addItem = (text, listIndex) => ({
    type: ADD_Item,
    text,
    listIndex
});

export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const fetchBoardSuccess = board => ({
    type: FETCH_BOARD_SUCCESS,
    board
});

export const fetchBoard = () => dispatch => {
    return fetch('/board').then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(board => {
        dispatch(fetchBoardSuccess(board));
    });
};

