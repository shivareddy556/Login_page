import { createStore } from "redux";
import rootReducer from "./reducers/index";
const Mystore=createStore(rootReducer,
    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );
export default Mystore;