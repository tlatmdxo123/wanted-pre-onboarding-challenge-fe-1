import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Auth from '@components/Auth'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <div>hello</div> },
  {
    path: '/auth',
    element: <Auth/>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
