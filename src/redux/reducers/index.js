import { combineReducers } from 'redux';
import { enableES5 } from 'immer';
import movies from './movies';
import { connectRouter } from 'connected-react-router';
import history from '../../lib/history';

enableES5();

let historyR = { router: connectRouter(history) };

export default combineReducers({
    ...historyR,
    movies,
})