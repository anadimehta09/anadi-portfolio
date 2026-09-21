import { projects } from "../data/projects";
import LinkButton from "./LinkButton";
import { GitHubIcon, ExternalIcon } from "./Icons";

function ProjectCard({ project }) {
  const isClient = project.type === "client";

  return (
    <article className={`project${isClient ? " project-client" : ""}`}>
      <header className="project-head">
        {isClient ? <p className="badge">Client work</p> : null}
        <h3>{project.name}</h3>
        {project.role ? <p className="project-role">{project.role}</p> : null}
      </header>

      <p className="project-desc">{project.description}</p>

      <ul className="feature-list" aria-label={`${project.name} features`}>
        {project.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <ul className="tags" aria-label={`${project.name} tech stack`}>
        {project.stack.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <div className="project-links">
        <LinkButton
          href={project.github}
          icon={<GitHubIcon />}
          missingLabel="Add the GitHub URL in src/data/projects.js"
        >
          GitHub
        </LinkButton>
        {project.demo ? (
          <LinkButton href={project.demo} variant="secondary" icon={<ExternalIcon />}>
            Live demo
          </LinkButton>
        ) : null}
      </div>
    </article>
  );
}

export default function Projects() {
  const client = projects.filter((p) => p.type === "client");
  const personal = projects.filter((p) => p.type !== "client");

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <header className="section-head section-head-wide">
          <h2 id="projects-title">Featured projects</h2>
          <p>AI, machine learning and backend work, plus one production site built for a client.</p>
        </header>

        {client.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}

        <div className="project-grid">
          {personal.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
