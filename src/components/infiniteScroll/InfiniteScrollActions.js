import {
    FETCH_THUMBNAILS_REQUEST,
    FETCH_THUMBNAILS_SUCCESS,
    FETCH_THUMBNAILS_FAILURE
} from './InfiniteScrollActionTypes';

export const fetchThumbnailRequest = () => ({
    type: FETCH_THUMBNAILS_REQUEST
});

export const fetchThumbnailSuccess = (payload) => ({
    type: FETCH_THUMBNAILS_SUCCESS,
    payload
});

export const fetchThumbnailError = (error) => ({
    type: FETCH_THUMBNAILS_FAILURE,
    payload: error
});
