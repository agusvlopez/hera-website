import './index.css';
import Product from "./components/product/Product"
import { AppMain } from './components/AppMain';
import NotFoundPage from "./pages/NotFoundPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './components/About';

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
        path: 'product/:id',
        element: <Product />
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
