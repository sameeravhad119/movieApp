import { produce } from 'immer';
import { SAVE_MOVIE_LIST } from '../types/movies';

const initialState = [];

const reducer = produce((state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SAVE_MOVIE_LIST:
            return [...state, ...payload]
        default:
            return state;
    }
})

export default reducer;
