export default function Card({ project }) {
  return (
    <div className="p-4 w-full rounded-lg max-w-3xl flex flex-col shadow-2xl  ">
      <div>
        <img src={project.image} alt="" />
      </div>
      <div>
        <h2 className="text-2xl mt-2">{project.title}</h2>
        <div>
          <span className="text-wrap    ">{project.description}</span>
        </div>
        <div className="mt-3 flex gap-3">
          {project.made_with.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt="Tech Used"
              className="w-10 h-10 "
            />
          ))}
        </div>
        <div className="flex justify-around mt-2">
          <button className="py-2 px-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800">
            <a href={project.github_link} target="_blank">
              Github
            </a>
          </button>
          <button className="py-2 px-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800">
            <a href={project.demo_link} target="_blank">
              Live demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
