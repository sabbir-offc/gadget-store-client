import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster></Toaster>
    </div>
  );
};

export default Root;
