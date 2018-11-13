import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';

import {
    ADD_LIST,
    ADD_Item,
    FETCH_BOARD_SUCCESS,
    DASHBOARD_ERROR,
} from '../actions/dashboard';

const initialState = {
    lists: [],
    
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }

    else if (action.type === ADD_LIST) {
        return Object.assign({}, state, {
            lists: [...state.lists, {
                title: action.title,
                id: action.id,
                items: []
            }]
        });
    }

    else if (action.type === ADD_Item) {
        let lists = state.lists.map((list, index) => {
            if (index !== action.listIndex) {
                return list;
            }
            return Object.assign({}, list, {
                items: [...list.items, {
                    text: action.text,
                    id: action.id,
                }]
            });
        });

        return Object.assign({}, state, {
            lists
        });
    }

    // else if (action.type === FETCH_BOARD_SUCCESS) {
    //     return action.dashboard;
    // }

    else if (action.type === FETCH_BOARD_SUCCESS) {
        return Object.assign({}, state, {
          error: null
        });

    } else if (action.type === DASHBOARD_ERROR) {
        return Object.assign({}, state, {
          error: action.error
        });
    }
    return state;
};

