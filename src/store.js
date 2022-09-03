import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { allItemReducer, myItemReducer, myItemDeleteReducer } from "./ReduxServices/Reducer/reducer";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    allItem: allItemReducer,
    myItem: myItemReducer,
    myItemDelete: myItemDeleteReducer,

})



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// const persistConfig = {
//     key: 'root',
//     storage,
// }
// const middleWare = [thunkMiddleware];

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(persistedReducer, compose(
//     applyMiddleware(...middleWare),
// ));


export default store;