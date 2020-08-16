import { produce } from 'immer';

const initialState = {};

const reducer = produce((state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        default:
            return state;
    }
})

export default reducer;
