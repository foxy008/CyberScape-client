export default function userReducer(state = {}, action) {
    switch (action.type) {
        case 'user/fetch':
            return state = action.payload;

        default:
            return state;
    }
}
