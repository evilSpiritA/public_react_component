import type { RouteObject } from "react-router-dom";
import SliderContinuousPage from './Ryan/pages/slider-continuous-page';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <SliderContinuousPage/>,
    children: [],
  },
  {
    path: "*",
    element: <SliderContinuousPage/>,
    children: [],
  }
];

export default routes;
