export const ADD_LIST = 'ADD_LIST';
export const addList = (title, boardId)  => ({
    type: ADD_LIST,
    title,
    boardId,
});

export const ADD_Item = 'ADD_Item';
export const addItem = (text, boardId, listIndex) => ({
    type: ADD_Item,
    text,
    boardId,
    listIndex
});

export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const fetchBoardSuccess = dashboard => ({
    type: FETCH_BOARD_SUCCESS,
    dashboard
});

export const fetchBoard = () => dispatch => {
    return fetch('/dashboard').then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(dashboard => {
        dispatch(fetchBoardSuccess(dashboard));
    });
};

