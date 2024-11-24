import modulesRoutes from "./modules/modulesRoutes";
import loginRoutes from "./login/loginRoutes";

const routes = [...modulesRoutes, ...loginRoutes];

export default routes;