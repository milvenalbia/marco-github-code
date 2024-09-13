import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Admin = ({ setCurrentUser }) => {
  return (
    <div className="h-screen w-screen flex bg-gray-50">
      {/* <Sidebar /> */}
      <Content setCurrentUser={setCurrentUser} />
    </div>
  );
};

export default Admin;
