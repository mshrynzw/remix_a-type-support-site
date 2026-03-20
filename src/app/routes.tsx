import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { HomePage } from "./components/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
    ],
  },
]);
