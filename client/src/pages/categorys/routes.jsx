import { Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import Categorys from "./Categorys";

export const CategoryRoutes = (
    <Route path="/Categorys" element={<Layout/>}>
    <Route index element={<Categorys/>}/>
    </Route>
)