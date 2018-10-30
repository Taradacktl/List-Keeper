import * as actions from '../actions/dashboard';

const initialState = {
    lists: []
};

export const dashboardReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_LIST) {
        return Object.assign({}, state, {
            lists: [...state.lists, {
                title: action.title,
                items: []
            }]
        });
    }
    else if (action.type === actions.ADD_Item) {
        let lists = state.lists.map((list, index) => {
            if (index !== action.listIndex) {
                return list;
            }
            return Object.assign({}, list, {
                items: [...list.items, {
                    text: action.text
                }]
            });
        });

        return Object.assign({}, state, {
            lists
        });
    }
    else if (action.type === actions.FETCH_BOARD_SUCCESS) {
        return action.dashboard;
    }
    return state;
};

