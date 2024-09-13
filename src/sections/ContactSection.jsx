import React from "react";

const ContactSection = () => {
  return (
    <div id="contact" className="dark:bg-slate-900 py-10">
      <div className="container mx-auto">
        {/* Top */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-indigo-600 font-bold dark:text-indigo-300">
            C O N T A C T
          </h1>
          <h1 className="text-3xl font-medium dark:text-gray-300">
            Have a Question?
          </h1>
          <p className="w-full px-10 md:w-1/2 md:px-0 text-center text-gray-400">
            Do you have an idea? Let's discuss it and see what we can do
            together.
          </p>
        </div>
        {/* Bottom */}
        <form className="flex flex-col gap-5 items-center mt-5 p-8" action="">
          <input
            className="w-full md:w-1/2 p-2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-gray-300"
            type="text"
            placeholder="Name Surname"
          />
          <input
            className="w-full md:w-1/2 p-2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-gray-300"
            type="text"
            placeholder="Email"
          />
          <textarea
            className="w-full md:w-1/2 p-2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-gray-300"
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button className="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 cursor-pointer rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
