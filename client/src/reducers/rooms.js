export default function roomsReducer(state = [ ], action) {
    console.log('test3');

    switch (action.type) {
        case 'rooms/fetch':
            state = action.payload
            // console.log(state);
            return state;

        // case 'selectedRoom/fetch':
        //     state.selected= action.payload;
        //     return state;

        default:
            return state;
    }
}
