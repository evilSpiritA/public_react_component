import React from 'react';
const MainDisplayPage = React.lazy(() => import('@/Sean/pages/main-display-page'));

const Eightofwands8Page = React.lazy(() => import('@/Sean/pages/eightofwands8'));


export const seanRoutes: T_Routes[] = [
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
        href: "/Sean/eightofwands8",
        element: <Eightofwands8Page />,
        displayImg: 'https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920',
      },
      {
        index: 2,
        title: "Slider Continuous Page",
        description: "Slider Continuous Page description",
        href: "/Sean/eightofwands8",
        element: <Eightofwands8Page />,
        displayImg: 'https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920',
      },
      {
        index: 3,
        title: "Slider Continuous Page",
        description: "Slider Continuous Page description",
        href: "/Sean/eightofwands8",
        element: <Eightofwands8Page />,
        displayImg: 'https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920',
      }
    ],
  },

]
 const seanRoutesFormatted = seanRoutes.map((item: any) => {
  return {
    treeHeader: item.treeHeader,
    treeChildren: item.treeChildren.map((child: any) => {
      return {
        path: "/Sean"+child.href,
        element: child.element,
        children: child.children,
      };
    }),
  };
});

export const seanRoutesArray = seanRoutesFormatted.flatMap((item: any) => item.treeChildren);
type T_Routes = {
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