import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const ADD_LIST = 'ADD_LIST';
export const addList = title  => ({
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
export const fetchBoardSuccess = dashboard => ({
    type: FETCH_BOARD_SUCCESS,
    dashboard
});

// export const fetchBoard = () => dispatch => {
//     return fetch('/dashboard').then(res => {
//         if (!res.ok) {
//             return Promise.reject(res.statusText);
//         }
//         return res.json();
//     }).then(dashboard => {
//         dispatch(fetchBoardSuccess(dashboard));
//     });
// };

export const fetchBoard = () => (dispatch, getState) => {
    dispatch(dashboardRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/dashboard`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(data => data.json())
        .then(dataObj => {
            dispatch({ type: 'DASHBORD_FETCH_SUCCESS', data: dataObj })
        }).catch(err => {
            dispatch({ type: 'DASHBORD_FETCH_ERROR' })
        })
}

export const DASHBOARD_REQUEST = 'DASHBOARD_REQUEST';
export const dashboardRequest = () => ({
  type: DASHBOARD_REQUEST
});

export const DASHBOARD_SUCCESS = 'DASHBOARD_SUCCESS';
export const dashboardSuccess = data => ({
  type: DASHBOARD_SUCCESS,
  data
});

export const DASHBOARD_ERROR = 'DASHBOARD_ERROR';
export const dashboardError = error => ({
  type: DASHBOARD_ERROR,
  error
});

fetchBoard()