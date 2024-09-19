import { AddLocationAlt, MailOutline, PhoneInTalk } from "@mui/icons-material";
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

        <div className="flex items-center justify-center py-16">
          <div className="flex sm:flex-row flex-col items-center gap-6">
            <div className="flex-1 flex flex-col items-center">
              <svg
                className="text-[74px] text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 6c2.07 2.04 2.85 4.89 2.36 7.55c.41.72.64 1.56.64 2.45a5 5 0 0 1-5 5c-.89 0-1.73-.23-2.45-.64c-2.66.49-5.51-.29-7.55-2.36c-2.07-2.04-2.85-4.89-2.36-7.55C3.23 9.73 3 8.89 3 8a5 5 0 0 1 5-5c.89 0 1.73.23 2.45.64c2.66-.49 5.51.29 7.55 2.36m-5.96 11.16c2.87 0 4.3-1.38 4.3-3.24c0-1.19-.56-2.46-2.73-2.95l-1.99-.44c-.76-.17-1.62-.4-1.62-1.11c0-.72.6-1.22 1.7-1.22c2.23 0 2.02 1.53 3.13 1.53c.58 0 1.08-.34 1.08-.93c0-1.37-2.19-2.4-4.05-2.4c-2.01 0-4.16.86-4.16 3.14c0 1.1.39 2.27 2.55 2.81l2.69.68c.81.2 1.01.65 1.01 1.07c0 .68-.68 1.35-1.91 1.35c-2.41 0-2.08-1.85-3.37-1.85c-.58 0-1 .4-1 .97c0 1.11 1.33 2.59 4.37 2.59"
                ></path>
              </svg>
              <span className="text-center">
                live:.cid.8a0a4e6dd3efa219 (Marcho Tagarda)
              </span>
            </div>
            <a
              href="mailto:tagardamarcho@gmail.com"
              className="flex-1 flex flex-col items-center"
            >
              <MailOutline style={{ fontSize: 74 }} className="text-gray-500" />
              <span>tagardamarcho@gmail.com</span>
            </a>
            <a
              href="tel:+639654263869"
              className="flex-1 flex flex-col items-center"
            >
              <PhoneInTalk style={{ fontSize: 74 }} className="text-gray-500" />
              <span>+639654263869</span>
            </a>
            <div className="flex-1 flex flex-col items-center">
              <AddLocationAlt
                style={{ fontSize: 74 }}
                className="text-gray-500"
              />
              <span className="text-center">
                Zone 3, Sta. Cruz, Tagoloan, Mis. Or., Philippines
              </span>
            </div>
          </div>
        </div>

        {/* <form className="flex flex-col gap-5 items-center mt-5 p-8" action="">
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
        </form> */}
      </div>
    </div>
  );
};

export default ContactSection;
