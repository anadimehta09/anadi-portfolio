import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="prose">
        <p>
          I'm a Computer Science graduate (B.Tech, June 2026) who builds AI/ML and backend systems end to end:
          a model or API on the server, and a React interface on top so the result is something a person can
          actually use.
        </p>
        <p>
          My projects cover resume analysis with NLP, fraud risk scoring, voice generation and content
          recommendation. I've also designed and built a news website for a real organization, Ujjain Samachar,
          as freelance work.
        </p>
        <p>
          I like the part of machine learning where it meets real software: clean REST APIs, stored history,
          and interfaces that make a model's output easy to understand. I'm early in my career, and I learn
          fastest by building things that have to work.
        </p>
      </div>
    </Section>
  );
}
