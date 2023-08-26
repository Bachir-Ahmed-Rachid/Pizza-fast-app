import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import OrderItem from "./features/order/OrderItem";
import AppLayout from "./ui/AppLayout";
import { getMenu, getOrder } from "./services/apiRestaurant";
import "./index.css";
import Error from "./ui/Error";
import Order from "./features/order/Order";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: async () => {
            return await getMenu();
          },
          errorElement: <Error />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
          loader: async ({ params }) => {
            const { orderId } = params;
            return await getOrder(orderId);
          },
          errorElement: <Error />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
