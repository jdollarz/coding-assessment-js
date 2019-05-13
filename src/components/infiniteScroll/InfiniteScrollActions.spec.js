import {
    FETCH_THUMBNAILS_REQUEST,
    FETCH_THUMBNAILS_SUCCESS,
    FETCH_THUMBNAILS_FAILURE
} from './InfiniteScrollActionTypes';

import {
    fetchThumbnailRequest,
    fetchThumbnailSuccess,
    fetchThumbnailError
} from './InfiniteScrollActions';

describe('Infinite Scroll Actions', () => {
    test('fetchThumbnailRequest()', () => {
        expect(fetchThumbnailRequest().type).toEqual(FETCH_THUMBNAILS_REQUEST);
    });

    test('fetchThumbnailSuccess()', () => {
        const payload = [ { title: 'some-title'}];
        const expectedResponse = {
          type: FETCH_THUMBNAILS_SUCCESS,
            payload
        };
        expect(fetchThumbnailSuccess(payload)).toEqual(expectedResponse);
    });

    test('fetchThumbnailError()', () => {
        const payload = { error: 'some-error'};
        const expectedResponse = {
            type: FETCH_THUMBNAILS_FAILURE,
            payload
        };
        expect(fetchThumbnailError(payload)).toEqual(expectedResponse);
    });
});