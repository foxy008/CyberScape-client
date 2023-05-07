export default function nftsReducer(state = [], action) {
    switch (action.type) {
        case 'nfts/fetch':
            return state = action.payload;

        default:
            return state;
    }
}
