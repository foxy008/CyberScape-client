import { addFavorite, removeFavorite } from "../helpers/favoriteMethods";
import { addRating, editRating } from "../helpers/ratingMethods";
import { fetchProfile, handleQuotaReduce } from "../helpers/userMethods";

export function fetchUser() {
    // console.log('run fetchUser');
    return function(dispatch) {
        fetchProfile()
        .then(payload => dispatch({
            type: 'user/fetch',
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


export function fetchUserAfterFavorited(id) {
    return function(dispatch) {
        addFavorite(id)
        .then(() => dispatch(fetchUser()))
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
        .then(() => dispatch(fetchUser()))
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
        addRating(id, rating)
        .then(() => dispatch(fetchUser()))
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

export function fetchUserAfterEditedRating(id, rating) {
    return function(dispatch) {
        editRating(id, rating)
        .then(() => dispatch(fetchUser()))
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

export function fetchUserAfterQuotaReduce() {
    return function(dispatch) {
        handleQuotaReduce()
        .then(() => dispatch(fetchUser()))
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
