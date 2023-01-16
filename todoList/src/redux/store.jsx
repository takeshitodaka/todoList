import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// reducer
import { customReducer } from "./customReducer";

const store = createStore(customReducer, applyMiddleware(logger));

export const AppProvider = ({ children }) => 
    <Provider store={store}>{children}</Provider>;