export default function Card({ project }) {
  return (
    <div className="p-4 w-full rounded-lg max-w-3xl flex flex-col shadow-2xl  ">
      <div>
        <img src={project.image} alt="Project Image" className="rounded-t-md" />
      </div>
      <div>
        <h2 className="text-2xl mt-2">{project.title}</h2>
        <div>
          <span className="text-wrap    ">{project.description}</span>
        </div>
        <div className="mt-3 flex gap-3">
          {project.made_with.map((icon, index) => (
            <div key={index} className="bg-gray-700 p-4 mb-2 rounded-md ">
              <img src={icon} alt="Tech Used" className="w-8 h-8 " />
            </div>
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
