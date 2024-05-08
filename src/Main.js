import react from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./Components/Store/Store";

const root = document.getElementById("root");
const rootElement = createRoot(root);

rootElement.render(
  <react.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </react.StrictMode>
);