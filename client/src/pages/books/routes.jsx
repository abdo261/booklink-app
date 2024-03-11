import { Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import Books from "./Books";

export const BookRoutes = (
    <Route path="/books" element={<Layout/>}>
    <Route index element={<Books/>}/>
    </Route>
)