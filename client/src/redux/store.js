import { applyMiddleware, combineReducers,createStore } from "redux"
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";
import modalReducer from "./reducers/modalReducer";
import nftReducer from "./reducers/nft";
const initialState={

}


const reducers=combineReducers({
    auth:authReducer,
    modal:modalReducer,
    nfts:nftReducer,
    nft:nftReducer,
})


const store=createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)))


export default store;