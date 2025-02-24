import projects from "../data/projects";
import Card from "./Card";
export default function Projects() {
  return (
    <section>
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </section>
  );
}
