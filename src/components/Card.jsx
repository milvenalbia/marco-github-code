import Icon from "../assets/images/icon.png";

const Card = () => {
  const cardContent = [
    {
      icon: Icon,
      title: "Graphic Design",
      desc: "I specialized in creating interactive websites for individuals and smalll businesses.",
      link: "#",
    },
    {
      icon: Icon,
      title: "Ads Design",
      desc: "I specialized in creating interactive websites for individuals and smalll businesses.",
      link: "#",
    },
    {
      icon: Icon,
      title: "Video Editing",
      desc: "I specialized in creating interactive websites for individuals and smalll businesses.",
      link: "#",
    },
    {
      icon: Icon,
      title: "Social Media Manager",
      desc: "I specialized in creating interactive websites for individuals and smalll businesses.",
      link: "#",
    },
    {
      icon: Icon,
      title: "Content Creator",
      desc: "I specialized in creating interactive websites for individuals and smalll businesses.",
      link: "#",
    },
    {
      icon: Icon,
      title: "Web Design",
      desc: "I specialized in creating interactive websites for individuals and smalll businesses.",
      link: "#",
    },
  ];

  return (
    <>
      {cardContent.map((card) => (
        <div
          key={card.title}
          className="w-full md:w-[32%] shadow-xl rounded-lg p-5 flex flex-col gap-3 mt-3 md:mt-10 dark:bg-slate-900 dark:shadow-slate-800"
        >
          <img className="w-10" src={card.icon} alt="" />
          <h1 className="font-medium text-lg dark:text-gray-300">
            {card.title}
          </h1>
          <p className="text-gray-400">{card.desc}</p>
          <a
            className="text-indigo-600 font-semibold text-sm dark:text-indigo-300"
            href={card.link}
          >
            Read More
          </a>
        </div>
      ))}
    </>
  );
};

export default Card;
