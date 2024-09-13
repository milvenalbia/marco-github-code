const WorksCard = ({ project }) => {
  return (
    <div className="w-full object-cover md:w-5/12 lg:w-[22.5%]  shadow-xl rounded-lg my-3 md:my-8 m-1 ">
      {project.category != "Videos" ? (
        <img src={project.fileURL} alt="" />
      ) : (
        <video src={project.fileURL} controls width="auto" height="auto">
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default WorksCard;
