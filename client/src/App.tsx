import './App.css';
import Homepage from './pages/Homepage';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contactpage from './pages/Contactpage';
import Updateform from './pages/Updateform';
import Deletecontact from './pages/Deletecontact';
import Chart from './pages/Chart';
import Countrydetails from './pages/Countrydetails';
import Maps from './pages/Maps';

const queryClient = new QueryClient({});

const router = createBrowserRouter([
  {
    path:'/',
    element:<Homepage/>
  },
  {
    path:'/contactpage',
    element:<Contactpage/>
  },
  {
    path:'/updateform/:id',
    element:<Updateform/>
  },
  {
    path:'/deletecontact/:id',
    element:<Deletecontact/>
  },
  {
    path:'/charts',
    element:<Chart/>
  },
  {
    path:'/countrydetails/:id',
    element:<Countrydetails/>
  },
  {
    path:'/maps/:id',
    element:<Maps/>
  }
])

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
    </>
  );
}

export default App;
