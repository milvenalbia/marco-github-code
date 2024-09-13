import React from "react";
import Form from "./Form";
import Table from "./Table";

const Content = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="w-full flex bg-white shadow-md items-center py-10 px-5 justify-between">
        <h2 className="text-bold text-2xl">Marco Tagarda</h2>
        <h2 className="text-bold text-2xl">Admin Panel</h2>
      </div>
      <div className="w-full py-8 px-6 flex gap-10">
        <Form />
        <Table />
      </div>
    </div>
  );
};

export default Content;
