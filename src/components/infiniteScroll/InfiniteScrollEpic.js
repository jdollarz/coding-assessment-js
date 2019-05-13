import { Observable } from 'rxjs';
import {ofType} from 'redux-observable'
import { switchMap, map, catchError  } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { FETCH_THUMBNAILS_REQUEST } from './InfiniteScrollActionTypes';
import { fetchThumbnailError, fetchThumbnailSuccess} from './InfiniteScrollActions';

const url = "https://jsonplaceholder.typicode.com/photos";
const picSumThumbUrl = 'https://picsum.photos/200';

let paginateTo = 9;
let paginateFrom = 0;
const fetchThumbnailEpic = (action$, state$) => {
    return action$.pipe(
        ofType(FETCH_THUMBNAILS_REQUEST),
        switchMap(() => {
            return ajax
                .getJSON(url).pipe(
                    map(data => data.slice(paginateFrom, paginateTo)),
                    map(items => items.map((item, index) => {
                        const randomImage = `${picSumThumbUrl}?${index}`;
                        paginateTo++;
                        return {
                            title: item.title,
                            thumbnailUrl: randomImage,
                            imageUrl: randomImage
                        };

                    }))
                )
        }),
        map(items => fetchThumbnailSuccess(items)),
        catchError(error => Observable.of(fetchThumbnailError(error.message)))
    );
};

export default fetchThumbnailEpic;