import './index.css';
import Product from "./components/product/Product"
import { AppMain } from './components/AppMain';
import NotFoundPage from "./pages/NotFoundPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './components/About';
import Services from './components/Services';
import Reiki from './components/Reiki';
import Success from './pages/mercadopago/Success';
import Pending from './pages/mercadopago/Pending';
import Failure from './pages/mercadopago/Failure';

const route = createBrowserRouter([
  {
    path: '/',
    element: <AppMain />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'reiki',
        element: <Reiki />
      },
      {
        path: 'product/:id',
        element: <Product />
      },
      {
        path: 'success',
        element: <Success />
      },
      {
        path: 'pending',
        element: <Pending />
      },
      {
        path: 'failure',
        element: <Failure />
      },
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App;
