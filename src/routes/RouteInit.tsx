import { Routes, Route } from "react-router-dom";
import { PageRoutes } from "./Routing";
import { AuthProvider } from "../components/provider/Auth-Provider";
import Layout from "../layout";


const RouteInit = () => {
  return (
    <Routes>
      {Object.entries(PageRoutes).map(([path, component], index) => (
        <Route key={path} path={path} element={<AuthProvider key={index}><Layout>{component()}</Layout></AuthProvider>} />
      ))}
    </Routes>
  );
};

export default RouteInit;
