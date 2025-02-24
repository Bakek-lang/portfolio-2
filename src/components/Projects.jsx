import projects from "../data/projects";
import Card from "./Card";
export default function Projects() {
  return (
    <section className="flex gap-2 flex-wrap rounded-lg">
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </section>
  );
}
