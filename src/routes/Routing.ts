
import { AuthorManagement } from "../pages/AuthorManagement";
import { BookManagement } from "../pages/BookManagement";
import { Login } from "../pages/Login";
import PublicherManagement from "../pages/PublicherManagement";

export const PageRoutes: Record<string, () => JSX.Element> = {
    ['/']: Login,
    ['/AuthorManagement']: AuthorManagement,
    ['/PublicherManagement']: PublicherManagement,
    ['/BookManagement']: BookManagement,

}