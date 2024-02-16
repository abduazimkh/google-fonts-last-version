import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("../page/home/Home"));

const RouteController = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: boolean }) => {

  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <Home isOpen={isOpen} setIsOpen={setIsOpen} />
        </Suspense>
      )
    }
  ]);

  return routes;
}

export default RouteController