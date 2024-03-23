import { Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import Books from "./Books";
import Show from "./Show";

export const BookRoutes = (
    <Route path="/books" element={<Layout/>}>
    <Route index element={<Books/>}/>
    <Route path="show/:id" element={<Show/>}/>
    </Route>
)