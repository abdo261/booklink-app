import { useState } from "react";
import Header from "../components/parts/header/Header";
import "./layout.css";
import Left from "../components/parts/left/left";
import Right from "../components/parts/Right/right";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const toggleLeft = () => {
    setShowRight((prev) => false);
    setShowLeft((prev) => !prev);
  };
  const toggleRight = () => {
    setShowLeft((prev) => false);
    setShowRight((prev) => !prev);
  };
  const closeBoth = () => {
    setShowRight((prev) => false);
    setShowLeft((prev) => false);
  };
  return (
    <>
      <Header
        toggleLeft={toggleLeft}
        toggleRight={toggleRight}
        showLeft={showLeft}
        showRight={showRight}
      />
      <Left showLeft={showLeft} toggleLeft={toggleLeft} />
      <Right showRight={showRight} />
      <div className="middle-section p-4" onClick={closeBoth}>
        <Outlet />
      </div>
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
};

export default Layout;
