export default function Card({ project }) {
  return (
    <div className="border border-gray-400 p-4 w-full rounded-lg max-w-lg ">
      <div>
        <img src={project.image} alt="" />
      </div>
      <div>
        <h2 className="text-2xl mt-2">{project.title}</h2>
        <span className="text-wrap  ">{project.description}</span>
        <div className="flex justify-around mt-2">
          <button className="py-2 px-3 bg-blue-400 text-white rounded-lg">
            <a href={project.github_link}>Github</a>
          </button>
          <button className="py-2 px-3 bg-blue-400 text-white rounded-lg">
            <a href={project.demo_link}>Live demo</a>
          </button>
        </div>
      </div>
    </div>
  );
}
