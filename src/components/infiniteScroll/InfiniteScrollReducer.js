import {
    FETCH_THUMBNAILS_REQUEST,
    FETCH_THUMBNAILS_SUCCESS,
    FETCH_THUMBNAILS_FAILURE
} from './InfiniteScrollActionTypes';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_THUMBNAILS_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case FETCH_THUMBNAILS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                payload: action.payload
            };

        case FETCH_THUMBNAILS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }

};

export default reducer;