
interface ProjectProps {
    title: string;
    description: string;
    image: string;
    alt: string;
    deployed: string;
    github: string;
  }


const ProjectCard = ({ title, description, deployed, github, image, alt }: ProjectProps) => {
    return (
      <div className=" bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all ease-in-out">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-4 text-gray-300">{description}</p>
          <img
              src={image}
              alt={alt}
              className="mt-4 w-full h-48 object-cover rounded-lg"    />
        <div className="flex justify-between items-center mt-4">
        <a href={deployed} className="text-purple-400 mt-4 inline-block hover:underline">
          View Project
        </a>
        <a href={github} className="text-purple-400 mt-4 inline-block hover:underline">
            View Code
        </a>
        </div>      
      </div>
    );
  };

export default ProjectCard;