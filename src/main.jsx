import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AboutUs from "./pages/AboutUs/AboutUs";
import Partners from "./pages/Partners/Partners";
import PartnerDetail from "./pages/Partners/PartnerDetail";
import Page1 from "./pages/Expertise/Page1";
import Page2 from "./pages/Expertise/Page2";
import Spotlights from "./pages/Spotlights/Spotlights";
import ThoughtCapital from "./pages/ThoughtCapital/ThoughtCapital";
import Article from "./pages/ThoughtCapital/Article";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/about-us/partners",
    element: <Partners />,
  },
  {
    path: "/about-us/partners-detail",
    element: <PartnerDetail />,
  },
  {
    path: "/expertise/1",
    element: <Page1 />,
  },
  {
    path: "/expertise/2",
    element: <Page2 />,
  },
  {
    path: "/in-the-spotlights",
    element: <Spotlights />,
  },
  {
    path: "/thought-capital",
    element: <ThoughtCapital />,
  },
  {
    path: "/thought-capital/article",
    element: <Article />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>
);
