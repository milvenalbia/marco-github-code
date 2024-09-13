import React, { useState } from "react";
import BasicTabs from "../components/BasicTabs";

const Portfolio = () => {
  const [value, setValue] = useState(0); // Initialize value with useState

  return (
    <div id="works" className="dark:bg-slate-900 py-10 px-10">
      <div className="container mx-auto">
        {/* Top */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-indigo-600 font-bold dark:text-indigo-300">
            P O R T F O L I O
          </h1>
          <h1 className="text-3xl font-medium dark:text-gray-300">
            Works & Projects
          </h1>
          <p className="w-full px-10 md:w-1/2 md:px-0 text-center text-gray-400">
            I help designers, small agencies and businesses bring their ideas to
            life. Powered by Figma, VS Code and coffee. I turn your requirements
            into a well-designed websites
          </p>
        </div>
        {/* Bottom */}
        <BasicTabs />
      </div>
    </div>
  );
};

export default Portfolio;
