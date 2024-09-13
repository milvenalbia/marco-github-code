import Card from "../components/Card";

const ServicesSection = () => {
  return (
    <div id="services" className="dark:bg-slate-900 py-10">
      <div className="container mx-auto px-10">
        {/* Top */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-indigo-600 font-bold dark:text-indigo-300">
            S E R V I C E S
          </h1>
          <h1 className="text-3xl font-medium dark:text-gray-300">
            What do I offer
          </h1>
          <p className="w-full px-10 md:w-1/2 md:px-0 text-center text-gray-400">
            My approach to website design is to create a website that
            strenghtens your company's brand while ensuring ease of use and
            simplicity for you audience.
          </p>
        </div>
        {/* Bottom */}
        <div className="p-5 sm:p-0 flex justify-between flex-wrap">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
