import './App.css';
import Homepage from './pages/Homepage';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Contactpage from './pages/Contactpage';
import Updateform from './pages/Updateform';
import Deletecontact from './pages/Deletecontact';

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
