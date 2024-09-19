import { Close, Menu } from "@mui/icons-material";
import Logo from "../assets/images/logo.png";
import Moon from "../assets/images/moon.png";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = [
    {
      name: "Homepage",
      link: "home",
    },
    {
      name: "About me",
      link: "about-me",
    },
    {
      name: "Works",
      link: "works",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  const [isClassActive, setIsClassActive] = useState(false);

  // Initialize state based on local storage
  useEffect(() => {
    const storedClassState = localStorage.getItem("isClassActive");
    if (storedClassState === "true") {
      setIsClassActive(true);
    }
  }, []);

  // Effect to update body class and local storage
  useEffect(() => {
    if (isClassActive) {
      document.body.classList.add("dark");
      localStorage.setItem("isClassActive", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("isClassActive", "false");
    }

    // Clean up the effect when the component unmounts
    return () => {
      document.body.classList.remove("dark");
    };
  }, [isClassActive]);

  const toggleClass = () => {
    setIsClassActive((prevState) => !prevState);
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((menu) => !menu);
  };

  return (
    <nav className="w-full fixed top-0 bg-white z-20 dark:bg-slate-900">
      <div className="container mx-auto py-5 flex items-center justify-between max-sm:px-5 sm:px-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-12" src={Logo} alt="" />
          <span className="text-3xl font-bold text-indigo-900 dark:text-white">
            Marcho.
          </span>
        </div>
        {/* Menu */}
        <ul className="hidden space-x-10 text-gray-600 font-bold text-sm uppercase md:flex dark:text-white">
          {links.map((link) => (
            <li
              key={link.name}
              className="hover:text-indigo-600 dark:hover:text-indigo-300 cursor-pointer"
            >
              <Link to={link.link} smooth={true} duration={500}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Icon Button */}
        <label className="inline-flex items-center relative cursor-pointer">
          <input
            className="peer hidden"
            id="toggle"
            type="checkbox"
            checked={isClassActive}
            onChange={toggleClass}
          />
          <div className="relative w-[110px] h-[50px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-lg duration-300 after:duration-300 after:shadow-md"></div>
          <svg
            height="0"
            width="100"
            viewBox="0 0 24 24"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px]"
          >
            <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"></path>
          </svg>
          <svg
            height="512"
            width="512"
            viewBox="0 0 24 24"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[13px]"
          >
            <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"></path>
          </svg>
        </label>

        {/* <img
          className="hidden md:block w-5 cursor-pointer"
          onClick={toggleClass}
          src={Moon}
          alt=""
        /> */}

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-[99999]">
          {showMenu ? (
            <Close onClick={toggleMenu} className="text-white relative " />
          ) : (
            <Menu onClick={toggleMenu} className="text-black dark:text-white" />
          )}
        </div>

        <ul
          className={`md:hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 space-y-10 rounded-b-xl text-center text-white uppercase transition-transform duration-300 z-[100] ${
            showMenu ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
