import { Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import Categorys from "./Categorys";
import { ShowCategory } from ".";

export const CategoryRoutes = (
    <Route path="/categorys" element={<Layout/>}>
    <Route index element={<Categorys/>}/>
    <Route path="show/:id" element={<ShowCategory/>} />
    </Route>
)