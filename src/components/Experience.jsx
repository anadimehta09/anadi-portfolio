import Section from "./Section";
import { experience } from "../data/site";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      intro="Freelance work for a real client."
    >
      <article className="entry">
        <header className="entry-head">
          <h3>{experience.title}</h3>
          <p className="entry-sub">
            {experience.client}
            <span className="entry-type">{experience.type}</span>
          </p>
        </header>
        <ul className="plain-list">
          {experience.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <ul className="tags" aria-label="Technologies used">
          {experience.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </article>
    </Section>
  );
}
