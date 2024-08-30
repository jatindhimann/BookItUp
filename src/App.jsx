import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  About,
  HomeLayout,
  Favourites,
  Error,
  Landing,
  Book,
  SinglePageError,
} from './Pages'
import { loader as landingLoader } from './Pages/Landing'
import { loader as singleBookLoader } from './Pages/Book'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

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
        loader: landingLoader(queryClient),
      },
      {
        path: 'book/:id',
        errorElement: <SinglePageError />,
        loader: singleBookLoader(queryClient),
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)

export default App
