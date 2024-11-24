import { RouteObject } from "react-router-dom";
import DisplayModulesTemplate from "../../components/templates/DisplayModulesTemplate";

const modulesRoutes: RouteObject[] = [
  { path: "/modules", element: <DisplayModulesTemplate /> },
];

export default modulesRoutes;
