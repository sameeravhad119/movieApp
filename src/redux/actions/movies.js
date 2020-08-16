import { GET_MOVIE_LIST, SAVE_MOVIE_LIST } from "../types/movies";

export const getMovieList = (payload) => ({
    type: GET_MOVIE_LIST
})

export const saveMovieList = (payload) => ({
    type: SAVE_MOVIE_LIST,
    payload
})
