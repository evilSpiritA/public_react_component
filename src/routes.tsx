import type { RouteObject } from "react-router-dom";
import HomePage from '@/Main/pages/home'
import { ryanRoutesArray } from '@/Ryan/configs/routes'
import {seanRoutesArray} from '@/Sean/configs/routes'

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },
  ...seanRoutesArray,
  ...ryanRoutesArray,
  {
    path: "*",
    element: <HomePage />,
    children: [],
  }
];

export default routes;
