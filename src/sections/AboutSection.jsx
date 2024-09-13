import Dots from "../assets/images/dots.png";
import Profile from "../assets/images/portrait.png";

const AboutSection = () => {
  return (
    <div className="px-10 dark:bg-slate-900" id="about-me">
      <div className="container mx-auto py-20 lg:py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
        {/* Left Side */}
        <div className="relative">
          <img
            className="h-1/4 absolute top-0 left-0 -z-10"
            src={Dots}
            alt=""
          />
          <div className="h-full rounded-full overflow-hidden">
            <img className="" src={Profile} alt="" />
          </div>
        </div>
        {/* Right Side */}
        <div className="my-0 lg:my-auto flex flex-col gap-3">
          <h1 className="text-indigo-600 dark:text-indigo-300 font-bold">
            ABOUT ME
          </h1>
          <h1 className="text-3xl font-medium dark:text-gray-300">
            Better Design
          </h1>
          <h1 className="text-3xl font-medium dark:text-gray-300">
            Better Experience
          </h1>
          <p className="text-gray-400">
            I design and build digital products. I'am also a multi-disciplinary
            maker with over 10 years of experience in wide range of design
            diciplinies.
          </p>
          <h2 className="text-gray-400 font-medium">Canva Design</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Ads Design</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-3/4 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Video Editing</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-10/12 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
