import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Destination from '../pages/destination';
import Crew from '../pages/crew';
import Technology from '../pages/technology';
import NotFound from '../pages/notFound';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/destination',
    element: <Destination />
  },
  {
    path: '/crew',
    element: <Crew />
  },
  {
    path: '/technology',
    element: <Technology />
  }
])