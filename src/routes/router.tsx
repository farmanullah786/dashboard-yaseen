import { RootLayout } from "@/components/layouts/root-layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import Dashboard from "./dashboard";

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<RootLayout />}>
      {/* Dashboard */}
      <Route element={<Outlet />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Route>

  </>
);

export const router = createBrowserRouter(routes);
