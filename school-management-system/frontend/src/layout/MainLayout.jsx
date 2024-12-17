import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
      <div>
        <Navbar /> {/* Navbar should be placed here */}
        <main>
          <Outlet /> {/* Render child routes here */}
        </main>
      </div>
    );
  };

export default MainLayout;
