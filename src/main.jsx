import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ContextProvider from './context/ContextProvider.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ErrorPage from './pages/ErrorPAge.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.Fragment>,
)
