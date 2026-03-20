
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./app/App";
  import "./styles/index.css";

const rootEl = document.getElementById("root");
if (rootEl) {
  // If prerender (SSG-like) output exists, hydrate to preserve the initial HTML.
  if (rootEl.hasChildNodes()) {
    hydrateRoot(rootEl, <App />);
  } else {
    createRoot(rootEl).render(<App />);
  }
}
  