import { fitnessReducer } from "./reducers/fitness-reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

const store = createStore(fitnessReducer, applyMiddleware(thunk));

export { store };
