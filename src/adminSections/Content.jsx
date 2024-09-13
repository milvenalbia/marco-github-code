import React from "react";
import Form from "./Form";
import Table from "./Table";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Content = ({ setCurrentUser }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      setCurrentUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="w-full flex bg-white shadow-md items-center py-10 px-5 justify-between">
        <h2 className="font-bold text-2xl">Marco Tagarda</h2>
        <div className="flex items-center gap-4">
          <h2 className="font-bold text-2xl">Admin Panel</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="w-full py-8 px-6 flex gap-10">
        <Form />
        <Table />
      </div>
    </div>
  );
};

export default Content;
