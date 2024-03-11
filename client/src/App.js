import { Routes } from "react-router-dom";
import "./App.css";
import { AuthRoutes } from "./pages/auth/routes";
import { CategoryRoutes } from "./pages/categorys/routes";
import { BookRoutes } from "./pages/books/routes";
import { OrderRoutes } from "./pages/orders/routes";
import { ProfileRoutes } from "./pages/profiles/routes";
import { UserRoutes } from "./pages/users/routes";
import { HomeRoutes } from "./pages/home/routes";

function App() {
  return (
    <>
      <Routes>
        {HomeRoutes}
        {AuthRoutes}
        {CategoryRoutes}
        {BookRoutes}
        {OrderRoutes}
        {ProfileRoutes}
        {UserRoutes}
      </Routes>
    </>
  );
}

export default App;
