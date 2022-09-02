import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { allItemReducer, myItemReducer } from "./ReduxServices/Reducer/reducer";

const rootReducer = combineReducers({
    reducer1: allItemReducer,
    reducer2: myItemReducer,

})



const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;