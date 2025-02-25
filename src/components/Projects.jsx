import projects from "../data/projects";
import Card from "./Card";
export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl p-4 text-white text-center">
        Projects from Noroff
      </h1>
      <section className="flex gap-8 text-white flex-wrap rounded-lg justify-center ">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
}
