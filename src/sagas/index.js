import { all, takeLatest } from 'redux-saga/effects'
import { GET_MOVIE_LIST } from '../redux/types/movies';
import { getMovieList } from './movies';

function* rootSaga() {
    yield all([
        takeLatest(GET_MOVIE_LIST, getMovieList)
    ])
}

export default rootSaga;