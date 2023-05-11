export default function nftsReducer(state = [], action) {
    // console.log(action.payload, '<-- di nftsReducer');

    switch (action.type) {
        case 'nfts/fetch':
            return state = action.payload;

        default:
            return state;
    }
}
