import AddProductPage from "../views/AddProductPage";
import AnalysePage from "../views/AnalysePage";
import DashboardPage from "../views/DashboardPage";
import EditProduct from "../views/EditProduct";
import LoginPage from "../views/LoginPage";
import NotFoundPage from "../views/NotFoundPage";
import RegisterPage from "../views/RegisterPage";

export default [
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/Register",
    element: <RegisterPage />,
  },
  {
    path: "/Dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/Dashboard/add",
    element: <AddProductPage />,
  },
  {
    path: "/Dashboard/edit/:id",
    element: <EditProduct />,
  },
  {
    path: "/Dashboard/analytics",
    element: <AnalysePage />,
  },
];
