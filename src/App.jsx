import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewClient from './components/NewClient/NewClient';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';


const router = createBrowserRouter([
{
  path:'/',
  element:<Layout />,
  children:[
    {
      path:'/newClient',
      element:<NewClient />
    },
    {
      index:true,
      element:<Home />
    }
  ]
}
])
function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
