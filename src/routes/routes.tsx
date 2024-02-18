import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import { Loading } from "../utils/Utils";
import Cart from "../page/cart/Cart";

const Home = lazy(() => import("../page/home/Home"));
const SingleFont = lazy(() => import("../page/single-font/SingleFont"));

const RouteController = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: boolean }) => {

  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <Home isOpen={isOpen} setIsOpen={setIsOpen} />
        </Suspense>
      )
    },
    {
      path: "/single-font/:font",
      element: (
        <Suspense fallback={<Loading />}>
          <SingleFont isOpen={isOpen} setIsOpen={setIsOpen} />
        </Suspense>
      )
    },
    {
      path: "/cart",
      element: (
        <Suspense fallback={<Loading />}>
          <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
        </Suspense>
      )
    }
  ]);

  return routes;
}

export default RouteController