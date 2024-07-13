import React, { useEffect, useState } from 'react';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';

import NewClient from './components/NewClient/NewClient';
import CustomerTabel from './components/CustomerTabel/CustomerTabel';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';

const router = (user) => createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: user ? <Home /> : <Navigate to="/login" />,
      },
      {
        path: '/newClient',
        element: user ? <NewClient /> : <Navigate to="/login" />,
      },
      {
        path: '/clients',
        element: user ? <CustomerTabel /> : <Navigate to="/login" />,
      },
    ],
  },
  {
    path: '/login',
    element: user ? <Navigate to="/" /> : <Login />,
  },
]);

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className='loading-container'><span class="loader"></span></div>; // Or a more elaborate loading spinner
  }

  return (
    <>
      <RouterProvider router={router(user)} />
    </>
  );
}

export default App;
