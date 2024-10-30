import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "keen-slider/keen-slider.min.css";
import { Provider } from "react-redux";
import store from "./redux/store/store.ts";
import "./i18n.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
