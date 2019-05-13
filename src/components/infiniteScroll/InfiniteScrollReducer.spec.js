import reducer from './InfiniteScrollReducer';
import {
    FETCH_THUMBNAILS_REQUEST,
    FETCH_THUMBNAILS_SUCCESS,
    FETCH_THUMBNAILS_FAILURE
} from './InfiniteScrollActionTypes';


describe('Infinite Scroll Reducer', () => {
    test('should return initial state when no actions passed', () => {
      const expectedResponse = {};
      expect(reducer(undefined,{})).toEqual(expectedResponse);
    });

    test('should return expected state when fetch request action is passed', () => {
        const expectedResponse = { isFetching: true };
        const action = { type: FETCH_THUMBNAILS_REQUEST};
        expect(reducer(undefined, action)).toEqual(expectedResponse);
    });

    test('should return expected state when fetch request success action type is passed', () => {
        const payload = [ { title: 'some-title', thumbnailUrl: 'some-thumbUrl' }];
        const expectedResponse = { isFetching: false, payload };
        const action = { type: FETCH_THUMBNAILS_SUCCESS, payload};

        expect(reducer(undefined, action)).toEqual(expectedResponse);
    });

    test('should return expected state when fetch request failure action type is passed', () => {
        const payload = { error: 'some-error' };
        const expectedResponse = { isFetching: false, error: payload };
        const action = { type: FETCH_THUMBNAILS_FAILURE, payload };

        expect(reducer(undefined, action)).toEqual(expectedResponse);
    });


});