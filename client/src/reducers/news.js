export default function newsReducer(state = [], action) {
    switch (action.type) {
        case 'news/fetch':
            return state = action.payload;

        default:
            return state;
    }
}
