import type { RouteObject } from "react-router-dom";
import HomePage from '@/Main/pages/home'
import { ryanRoutesArray } from '@/Ryan/configs/routes'
import Eightofwands8 from "@/Sean/pages/eightofwands8";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },
  {
    path: "/eightofwands8",
    element: <Eightofwands8 />,
    children: [],
  },
  ...ryanRoutesArray,
  {
    path: "*",
    element: <HomePage />,
    children: [],
  }
];

export default routes;
