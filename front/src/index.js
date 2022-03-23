import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "store";
// import "assets/style/css/App.css";
import App from "./App";
<<<<<<< HEAD
// import reportWebVitals from "tests/reportWebVitals";
import * as serviceWorkerRegistration from "./tests/serviceWorkerRegistration";

const startApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://cra.link/PWA
  serviceWorkerRegistration.register();
};

if (window.cordova) {
  document.addEventListener("deviceready", startApp, false);
} else {
  startApp();
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
=======
import reportWebVitals from "tests/reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
>>>>>>> 2b288e32856c89e6f75af58144df14d4051c0f22
