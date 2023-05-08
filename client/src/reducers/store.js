import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
// import userReducer from './user'
import nftsReducer from './nfts'
import roomsReducer from './rooms'
import newsReducer from './news'
import thunk from 'redux-thunk'
import userReducer from './user'

const store = createStore(combineReducers({
    user: userReducer,
    nfts: nftsReducer,
    rooms: roomsReducer,
    news: newsReducer
}), applyMiddleware(thunk));

export default store;
