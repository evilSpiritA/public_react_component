import type { RouteObject } from "react-router-dom";
import HomePage from './Main/pages/home'
import SliderContinuousPage from './Ryan/pages/slider-continuous-page';
import SliderSplitImagePage from './Ryan/pages/slider-split-image-page';
import Eightofwands8 from "./Sean/pages/eightofwands8";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },
  {
    path: "/SliderContinuousPage",
    element: <SliderContinuousPage />,
    children: [],
  },
  {
    path: "/SliderSplitImagePage",
    element: <SliderSplitImagePage />,
    children: [],
  },
  {
    path: "/eightofwands8",
    element: <Eightofwands8 />,
    children: [],
  },
  {
    path: "*",
    element: <HomePage />,
    children: [],
  }
];

export default routes;
