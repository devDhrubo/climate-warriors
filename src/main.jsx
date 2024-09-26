import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Error from './pages/ErrorPage/Error';
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import Newsfeed from './pages/Newsfeed/Newsfeed';
import ImpactCal from './pages/ImpactCal/ImpactCal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/newsfeed",
        element:<Newsfeed/>
      },
      {
        path: "/impact",
        element: <ImpactCal/>
      },
      {
        path: '/about',
        element: <Team/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
