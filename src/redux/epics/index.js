import { combineEpics } from 'redux-observable';
import infiniteScroll from '../../components/infiniteScroll/InfiniteScrollEpic'
import fetchMessageEpic from './fetchMessage';

export default combineEpics(
    infiniteScroll,
    fetchMessageEpic
);