import * as api from '../utils/api';

// Actions
export function songsFetch(songTitle) {
    return {
        type: 'SONGS_FETCH',
        payload: songTitle
    }
}

export function songsFetchSuccess(res) {
    return {
        type: 'SONGS_FETCH_SUCCESS',
        payload: res.data.results
    }
}

export function songsFetchError(err) {
    return {
        type: 'SONGS_FETCH_ERROR',
        payload: err
    }
}

// Async Actions
export const getSongs = (songTitle) => {
    return (dispatch) => {
        console.log(songTitle)
        // Tell redux we are gonna make a xhr request. You could tell your app to show a spinner when dispatched
        dispatch(songsFetch(songTitle));

        // Call api
        api.getSongs(songTitle)
        .then(res => dispatch(songsFetchSuccess(res)))
        .catch(err  => dispatch(songsFetchError(err)));
    }
}