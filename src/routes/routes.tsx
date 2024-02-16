import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import { Loading } from "../utils/Utils";

const Home = lazy(() => import("../page/home/Home"));

const RouteController = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: boolean }) => {

  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <Home isOpen={isOpen} setIsOpen={setIsOpen} />
        </Suspense>
      )
    }
  ]);

  return routes;
}

export default RouteController