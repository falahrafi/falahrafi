import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import PortfolioPage from "./views/PortfolioPage";
import ProjectDetailPage from "./views/ProjectDetailPage";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />
   },
   {
      path: '/portfolio/:category',
      element: <PortfolioPage />
   },
   {
      path: '/project/:id',
      element: <ProjectDetailPage />
   },
])

export default router;