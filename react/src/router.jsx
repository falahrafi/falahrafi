import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Portfolio from "./views/PortfolioPage";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />
   },
   {
      path: '/portfolio',
      element: <Portfolio />
   },
])

export default router;