import Section from "./Section";
import { education } from "../data/site";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <article className="entry">
        <header className="entry-head">
          <h3>{education.degree}</h3>
          <p className="entry-sub">{education.school}</p>
        </header>
        <dl className="facts">
          <div>
            <dt>University</dt>
            <dd>{education.university}</dd>
          </div>
          <div>
            <dt>Graduated</dt>
            <dd>{education.graduated}</dd>
          </div>
          <div>
            <dt>CGPA</dt>
            <dd>{education.cgpa}</dd>
          </div>
        </dl>
      </article>
    </Section>
  );
}
