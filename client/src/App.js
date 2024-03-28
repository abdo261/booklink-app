import { Routes } from "react-router-dom";
import "./App.css";
import { AuthRoutes } from "./pages/auth/routes";
import { CategoryRoutes } from "./pages/categorys/routes";
import { BookRoutes } from "./pages/books/routes";
import { OrderRoutes } from "./pages/orders/routes";
import { ProfileRoutes } from "./pages/profiles/routes";
import { UserRoutes } from "./pages/users/routes";
import { HomeRoutes } from "./pages/home/routes";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          draggablePercent={60}
        />
    </>
  );
}

export default App;
