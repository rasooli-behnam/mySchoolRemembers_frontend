import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "src/components/App";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  reducers,
  applyMiddleware(promiseMiddleware(), logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
