import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import Hello from "./components/Hello";

ReactDOM.render(
  <Hello name="First TypeScript App" />,
  document.querySelectorAll(".app")[0]
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
