import { Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import Login from "./login/Login";
import Register from "./register/Register";

export const AuthRoutes = (
    <Route path="auth" element={<Layout/>}>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
    </Route>
)