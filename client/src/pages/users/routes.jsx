
import { Route } from "react-router-dom";
import Users from "./Users";
import Layout from "../../layout/Layout";

export const UserRoutes = (
    <Route path="/users" element={<Layout/>}>
  <Route index element={<Users/>} />
    </Route>
)