import './index.css';
import Product from "./components/product/Product"
import { AppMain } from './components/AppMain';
import NotFoundPage from "./pages/NotFoundPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: '/',
    element: <AppMain />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'product',
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
