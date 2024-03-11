import { Route } from "react-router-dom";
import Orders from "./Orders";
import Layout from "../../layout/Layout";

export const OrderRoutes = (
    <Route path="/orders" element={<Layout/>}>
        <Route index element={<Orders/>}/>
    </Route>
    )