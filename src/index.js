import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/Footer.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
const foot = ReactDOM.createRoot(document.getElementById("foot"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
foot.render(<Footer />);

serviceWorkerRegistration.register();

reportWebVitals();
