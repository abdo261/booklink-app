import { Route } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import ForgetPassword from "./forgetPassword/ForgetPassword";

export const AuthRoutes = (
    <>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="forget-password" element={<ForgetPassword/>} />
    </>
)