import Dots from "../assets/images/dots.png";
import Profile from "../assets/images/marco1.png";

const AboutSection = () => {
  return (
    <div className="px-10 dark:bg-slate-900" id="about-me">
      <div className="container mx-auto py-20 lg:py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
        {/* Left Side */}
        <div className="relative sm:w-[40%]">
          <img
            className="h-1/4 absolute top-0 left-0 -z-10"
            src={Dots}
            alt=""
          />
          <div className="h-full rounded-[100px] overflow-hidden">
            <img src={Profile} alt="" />
          </div>
        </div>
        {/* Right Side */}
        <div className="my-0 lg:my-auto w-full flex flex-col gap-3">
          <h1 className="text-indigo-600 dark:text-indigo-300 font-bold">
            ABOUT ME
          </h1>
          <h1 className="text-3xl font-medium dark:text-gray-300">
            Better Design
          </h1>
          <h1 className="text-3xl font-medium dark:text-gray-300">
            Better Experience
          </h1>
          <p className="text-gray-400 w-[85%]">
            I design and build digital products, and I am a multi-disciplinary
            maker with over 5 years of experience in various fields, including{" "}
            <span className="text-gray-900 font-extrabold">Graphic Design</span>
            ,{" "}
            <span className="text-gray-900 font-extrabold">Video Editing</span>,{" "}
            <span className="text-gray-900 font-extrabold">
              Social Media Management
            </span>
            , and{" "}
            <span className="text-gray-900 font-extrabold">
              Lead Generation
            </span>
            .
          </p>
          <h2 className="text-gray-400 font-medium">Canva</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Capcut</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-[95%] bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Figma</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-[90%] bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Adobe Photoshop</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-[92%] bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Illustrator</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-[90%] bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
