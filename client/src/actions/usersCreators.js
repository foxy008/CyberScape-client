import { addFavorite, removeFavorite } from "../helpers/favoriteMethods";
import fetchProfile from "../helpers/userMethods";

export function fetchUserAfterFavorited(id) {
    return function(dispatch) {
        addFavorite(id)
        .then(() => fetchProfile())
        .then(payload => dispatch({
            type: 'users/fetch',
            payload
        }))
        .catch(error => {
            if (error.response) {
                console.log(error.response);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error: ', error.message);
            }
        })
    }
}

export function fetchUserAfterUnfavorited(id) {
    return function(dispatch) {
        removeFavorite(id)
        .then(() => fetchProfile())
        .then(payload => dispatch({
            type: 'users/fetch',
            payload
        }))
        .catch(error => {
            if (error.response) {
                console.log(error.response);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error: ', error.message);
            }
        })
    }
}

export function fetchUserAfterAddingRating(id, rating) {
    return function(dispatch) {
        addFavorite(id, rating)
        .then(() => fetchProfile())
        .then(payload => dispatch({
            type: 'users/fetch',
            payload
        }))
        .catch(error => {
            if (error.response) {
                console.log(error.response);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error: ', error.message);
            }
        })
    }
}
