import { RouteObject } from "react-router-dom";
import LoginModuleTemplate from "../../components/templates/LoginModuleTemplate";

const loginRoutes: RouteObject[] = [
  { path: "/", element: <LoginModuleTemplate /> },
];

export default loginRoutes;
