import { Route } from "react-router-dom";
import Home from "./Home";
import Layout from "../../layout/Layout";

export const HomeRoutes = (
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
    </Route>
    )