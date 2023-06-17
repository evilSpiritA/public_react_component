import type { RouteObject } from "react-router-dom";
import SliderContinuousPage from './Ryan/pages/slider-continuous-page';
import Eightofwands8 from "./Sean/pages/eightofwands8"; 

const routes: RouteObject[] = [
  {
    path: "/",
    element: <SliderContinuousPage/>,
    children: [],
  },
  {
    path: "/eightofwands8",
    element: <Eightofwands8/>,
    children: [],
  },
  {
    path: "*",
    element: <SliderContinuousPage/>,
    children: [],
  }
];

export default routes;
