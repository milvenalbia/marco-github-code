import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[280px] h-screen py-6 px-4 flex flex-col bg-white shadow-md">
      <div className="h-[100px] w-full flex items-center justify-center">
        Header
      </div>
      <div className="py-10 px-5 flex flex-col items-center">
        <Link className="" to={"/projects"}>
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
