import MovieApi from "../services/movieApi";
import { saveMovieList } from "../redux/actions/movies";
import { put } from "redux-saga/effects";

let api = new MovieApi();

export function* getMovieList() {
    console.log('getMovieList saga');
    let response = yield api.getMovies()
    console.log('response', response)
    if (response.status) {
        let movies = response.data.map(({ genre, ...otherProps }) => {
            return ({
                ...otherProps,
                genre: genre.map(value => value.trim())
            })
        })
        yield put(saveMovieList(movies));
    }
}