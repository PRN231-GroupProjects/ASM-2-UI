import { Routes, Route } from "react-router-dom";
import { PageRoutes } from "./Routing";
import { AuthProvider } from "../components/provider/Auth-Provider";


const RouteInit = () => {
  return (
    <Routes>
      {Object.entries(PageRoutes).map(([path, component], index) => (
        <Route key={path} path={path} element={<AuthProvider key={index}>{component()}</AuthProvider>} />
      ))}
    </Routes>
  );
};

export default RouteInit;
