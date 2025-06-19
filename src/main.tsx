import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App/App";

const rootElem = document.getElementById("root");
const root = createRoot(rootElem as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);