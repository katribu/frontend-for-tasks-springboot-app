import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NewTask from './NewTask';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path:"/newtask",
    element: <NewTask/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

