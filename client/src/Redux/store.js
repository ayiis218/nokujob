/* eslint-disable import/no-mutable-exports */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import promiseMiddleware from 'redux-promise-middleware';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk);
let store = null;
if (process.env.REACT_APP_NODE_ENV === "prod") {
	store = createStore(persistedReducer, middleware);
} else {
	store = createStore(
		persistedReducer,
		process.env.REACT_APP_NODE_ENV === "prod" ? middleware : composeWithDevTools(middleware)
	);
}

const persistor = persistStore(store);

export { store, persistor };
