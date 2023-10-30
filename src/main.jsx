import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ContextProvider from './context/ContextProvider.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ErrorPage from './pages/ErrorPAge.jsx';
import IsAuthenticated from './components/IsAuthenticated.jsx';
import IsPublic from './components/IsPublic.jsx';


const router = createBrowserRouter([
  // Private routes
  {
    path: '/',
    element: <IsAuthenticated />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> }
    ]
  },
  // Public routes
  {
    path: '/',
    element: <IsPublic />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.Fragment>,
)
