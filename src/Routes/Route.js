/** @format */
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import Forgotpassword from "../pages/Login/Forgotpassword.jsx";
import Login from "../pages/Login/Login.jsx";



const allRoutes = [
  {
    route: "/",
    component: <Login />,
  },
  {
    route: "/forgetpassword",
    component: <Forgotpassword />,
  },
  {
    route: "/dashboard",
    component: <Dashboard />,
  },
];

export default allRoutes;