// import {
//     ADD_LIST,
//     ADD_Item,
//     FETCH_BOARD_SUCCESS
// } from '../actions/dashboard';

// const initialState = {

//     lists: []
// };

// export const dashboardReducer = (state = initialState, action) => {
//     if (action.type === ADD_LIST) {
//         debugger
//         return Object.assign({}, state, {
//             lists: [...state.lists, {
//                 title: action.title,
//                 id: action.id,
//                 items: []
//             }]
//         });
//     }
//     else if (action.type === ADD_Item) {
//         let lists = state.lists.map((list, index) => {
//             if (index !== action.listIndex) {
//                 return list;
//             }
//             return Object.assign({}, list, {
//                 items: [...list.items, {
//                     text: action.text,
//                     id: action.id,
//                 }]
//             });
//         });

//         return Object.assign({}, state, {
//             lists
//         });
//     }
//     else if (action.type === FETCH_BOARD_SUCCESS) {
//         return action.dashboard;
//     }
//     return state;
// };

