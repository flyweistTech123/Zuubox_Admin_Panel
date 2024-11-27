/** @format */
import Cell from "../pages/Cell/Cell.jsx";
import CountryCity from "../pages/Country & City/CountryCity.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import Forgotpassword from "../pages/Login/Forgotpassword.jsx";
import Login from "../pages/Login/Login.jsx";
import Logo from "../pages/Logo/Logo.jsx";
import Places from "../pages/Places/Places.jsx";



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
    component: <Dashboard text="Dashboard"/>,
  },
  {
    route: "/logo",
    component: <Logo text="Logo"/>,
  },
  {
    route: "/cell",
    component: <Cell text="Cell"/>,
  },
  {
    route: "/places",
    component: <Places text="Places"/>,
  },
  {
    route: "/country&city",
    component: <CountryCity text="Country & City"/>,
  },
];

export default allRoutes;