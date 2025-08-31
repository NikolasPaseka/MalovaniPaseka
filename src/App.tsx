import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home'
import PricingPage from './pages/Pricing'

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cenik",
        element: <PricingPage />,
      },
    ],
  },
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
