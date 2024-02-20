import { Suspense, lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import { Loading } from "../utils/Utils";

const Home = lazy(() => import("../page/home/Home"));
const SingleFont = lazy(() => import("../page/single-font/SingleFont"));
const Embded = lazy(() => import("../page/cart/embded/Embded"));
const Cart = lazy(() => import("../page/cart/Cart"));


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
          <Outlet />
        </Suspense>
      ),
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<Loading />}>
              <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
            </Suspense>
          ),
        },
        {
          path: "embded",
          element: (
            <Suspense fallback={<Loading />}>
              <Embded />
            </Suspense>
          ),
        }
      ]
    }
  ]);

  return routes;
}

export default RouteController