import { Login } from "../pages/Login";
import { UserManagement } from "../pages/UserManagement";


export const PageRoutes: Record<string, () => JSX.Element> = {
    ['/']: Login,
    ['/UserManagement']: UserManagement,

}