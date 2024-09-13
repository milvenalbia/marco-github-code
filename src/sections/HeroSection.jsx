import Man from "../assets/images/man.png";
import Navbar from "../components/Navbar";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ["Vedio Editor", "Graphic Designer", "Virtual Assistant"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  return (
    <div
      className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden"
      id="home"
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero content */}
      {/* Image */}
      <img
        className="absolute bottom-0 -right-6 lg:right-36  lg:left-0 mx-auto h-5/6 object-cover"
        src={Man}
        alt=""
      />
      {/* Circle */}
      <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"></div>

      {/* Text w/ Animeted Text*/}
      <div className="absolute top-1/3 left-5 text-2xl sm:left-5 sm:text-3xl md:left-10 md:text-4xl lg:text-5xl lg:left-5 xl:left-20 xl:text-6xl 2xl:left-40 font-bold">
        <span className="text-gray-600 dark:text-gray-500">Freelance</span>
        <p className="text-red-500 dark:text-red-700">
          {text}
          <Cursor />
        </p>
      </div>

      {/* Text Box */}
      <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 right-10 m-auto bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3 lg:top-1/3 lg:right-5 xl:top-0 xl:right-10">
        <h1 className="text-4xl font-bold text-indigo-900 dark:text-indigo-300">
          Hi, I'm Marco
        </h1>
        <p className="text-gray-400">
          I provide top-notch services in graphic design, virtual assistance,
          and video editing. I create stunning visual content, efficiently
          manage administrative tasks, and produce high-quality videos to meet
          your needs. Partner with me for reliable and creative solutions that
          enhance your brand and streamline your operations.
        </p>
        <div className="flex gap-4">
          <a
            className="bg-indigo-600 text-white text-xl px-3 py-2 w-fit rounded-md font-semibold"
            href="#contact"
          >
            Hire Me
          </a>

          <a
            className="bg-emerald-400 text-white text-xl px-3 py-2 w-fit rounded-md font-semibold"
            href="#works"
          >
            See My Works
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
