import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import cartReducer from "./components/reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

//Get the state from local storage for retaining the state on page reload
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : undefined;

//Pass the fetched state into the store ans create the store
const store = createStore(cartReducer, persistedState);

//subscribing the store, whenever state changes, it gets saved to local storage *Note* Middleware can be used for better performance
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

//Render the app component wrapped in provider and pass store as props
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
