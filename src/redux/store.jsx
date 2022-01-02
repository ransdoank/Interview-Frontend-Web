import { applyMiddleware, createStore } from "redux";
import reducers from "./reducer";
// import logger from "redux-logger";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// const middleware = applyMiddleware(logger, promise);
const middleware = applyMiddleware(promise);

// const store = createStore(reducers, composeWithDevTools(middleware));

let store = createStore(persistedReducer, composeWithDevTools(middleware));
let persistor = persistStore(store);

const persist = { store, persistor };
export default persist;
