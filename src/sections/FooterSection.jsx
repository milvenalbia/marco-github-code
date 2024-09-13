import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Logo from "../assets/images/logo.png";

const FooterSection = () => {
  return (
    <div className="w-full bg-gray-800">
      <div className="container mx-auto py-5 px-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="w-8" src={Logo} alt="" />
          <span className="text-2xl font-bold text-white">Marcho.</span>
        </div>
        <span className="hidden md:block font-medium text-white">
          © 2024 Marcho. Well Designed.
        </span>
        <div className="flex gap-2 text-white">
          <Facebook />
          <Instagram />
          <Twitter />
          <LinkedIn />
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
