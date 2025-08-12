import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <div className=" pt-2">
        <Navbar></Navbar>
      </div>
      <div className="max-w-full max-h-7xl min-h-screen mx-auto pb-4 bg-base-200 pt-5">
        <Outlet></Outlet>
      </div>

      <div className=" pb-8 ">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
