import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import {dashboardReducer} from './reducers/dashboard';

export default createStore(dashboardReducer, applyMiddleware(thunk));

