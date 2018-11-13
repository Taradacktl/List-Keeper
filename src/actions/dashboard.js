import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import uuid from 'uuid'

export const ADD_LIST = 'ADD_LIST';
export const addList = title  => ({
    type: ADD_LIST,
    title,
    id:uuid.v4(),
});

export const ADD_Item = 'ADD_Item';
export const addItem = (text, listIndex) => ({
    type: ADD_Item,
    text,
    listIndex,
    id:uuid.v4(),
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


export const saveItem = (text, listIndex) => (dispatch, getState) => {
    //console.log(text, listIndex, getState())
    dispatch(addItem(text, listIndex))
    const list = getState().protectedData.lists[listIndex]

    debugger
}

export const fetchBoard = () => (dispatch, getState) => {
    dispatch(fetchBoardSuccess());
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
            dispatch({ type: 'DASHBOARD_FETCH_SUCCESS', data: dataObj })
        }).catch(err => {
            dispatch({ type: 'DASHBOARD_FETCH_ERROR' })
        })
}

export const updateDashboard = dashboard => (dispatch, getState) => {
    dispatch(dashboardRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/dashboard/${dashboard.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify(dashboard)
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .catch((err) => {
        dispatch(dashboardError(err));
      });
  };

// export const DASHBOARD_REQUEST = 'DASHBOARD_REQUEST';
// export const dashboardRequest = () => ({
//   type: DASHBOARD_REQUEST
// });

export const DASHBOARD_REQUEST = 'DASHBOARD_REQUEST';
export const dashboardRequest = data => ({
  type: DASHBOARD_REQUEST,
  data
});

export const DASHBOARD_ERROR = 'DASHBOARD_ERROR';
export const dashboardError = error => ({
  type: DASHBOARD_ERROR,
  error
});

fetchBoard()