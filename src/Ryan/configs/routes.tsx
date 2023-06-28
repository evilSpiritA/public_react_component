/* eslint-disable react-refresh/only-export-components */
import React from 'react';

const MainDisplayPage = React.lazy(() => import('@/Ryan/pages/main-display-page'));
const SliderContinuousPage = React.lazy(() => import('@/Ryan/pages/slider-continuous-page'));
const SliderSplitImagePage = React.lazy(() => import('@/Ryan/pages/slider-split-image-page'));
const ExpandingFlexCardsPage = React.lazy(() => import('@/Ryan/pages/expanding-flex-cards-page'));

export const ryanRoutes: T_ryanRoutes[] = [
  {
    treeHeader: "main",
    treeChildren: [
      {
        index: 1,
        title: "Ryan Main Display Page",
        href: "/MainDisplayPage",
        element: <MainDisplayPage />,
      },
    ],
  },
  {
    treeHeader: "customersComponent",
    treeChildren: [
      {
        index: 1,
        title: "Slider Continuous Page",
        description: "Slider Continuous Page description",
        href: "/SliderContinuousPage",
        element: <SliderContinuousPage />,
        displayImg: 'https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920',
      },
      {
        index: 2,
        title: "Slider Split Image Page",
        description: "Slider Split Image Page description",
        href: "/SliderSplitImagePage",
        element: <SliderSplitImagePage />,
        displayImg: 'https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920',
      },
      {
        index: 3,
        title: "Expanding Flex Cards Page",
        description: "Expanding Flex Cards Page description",
        href: "/ExpandingFlexCardsPage",
        element: <ExpandingFlexCardsPage />,
        displayImg: 'https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920',
      },
    ],
  },

]

export const portfolioPath: I_children[] = [
  {
    index: 1,
    title: "Three fiber shirt",
    description: "three-fiber-shirt description",
    href: "https://three-fiber-shirt.vercel.app/",
    displayImg: 'https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920',
  },
  {
    index: 2,
    title: "Scroll trigger excise",
    description: "scroll-trigger-excise description",
    href: "https://scroll-trigger-excise.vercel.app/",
    displayImg: 'https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920',
  }
  ,
  {
    index: 3,
    title: "webgl 3d text",
    description: "webgl-3d-text description",
    href: "https://webgl-3d-text-blue-ten.vercel.app/",
    displayImg: 'https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920',
  }
]

const ryanRoutesFormatted = ryanRoutes.map((item: any) => {
  return {
    treeHeader: item.treeHeader,
    treeChildren: item.treeChildren.map((child: any) => {
      return {
        path: child.href,
        element: child.element,
        children: child.children,
      };
    }),
  };
});

export const ryanRoutesArray = ryanRoutesFormatted.flatMap((item: any) => item.treeChildren);

type T_ryanRoutes = {
  treeHeader: string;
  treeChildren: I_treeChildren[]
}

export interface I_children {
  index: number;
  title: string;
  description?: string;
  href: string;
  displayImg?: string;
}

export interface I_treeChildren extends I_children {
  element?: any;
}
