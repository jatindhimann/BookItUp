import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  About,
  HomeLayout,
  Favourites,
  Error,
  Landing,
  Book,
  SinglePageError,
} from './Pages'
import { loader as landingloader } from './Pages/Landing'
import { loader as singleBookLoader } from './Pages/Book'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingloader,
      },
      {
        path: 'book/:id',
        errorElement: <SinglePageError />,
        loader: singleBookLoader,
        element: <Book />,
      },
      {
        path: 'favourites',
        element: <Favourites />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router={router} />
}
export default App
