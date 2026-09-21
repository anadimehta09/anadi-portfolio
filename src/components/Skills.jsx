import Section from "./Section";
import { skillGroups } from "../data/site";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools I use across my projects.">
      <dl className="skills">
        {skillGroups.map((group) => (
          <div className="skill-row" key={group.label}>
            <dt>{group.label}</dt>
            <dd>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
