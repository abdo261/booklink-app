import { Route } from "react-router-dom";
import Profile from "./Profile";
import Layout from "../../layout/Layout";
import Settings from "./Settings";

export const ProfileRoutes = (
    <Route path="/profiles" element={<Layout/>}>
        <Route path="/profiles/show/:id" element={<Profile/>} />
        <Route path="/profiles/settings/:id" element={<Settings/>} />
    </Route>
)