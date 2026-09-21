import { site } from "../data/site";
import LinkButton from "./LinkButton";
import { GitHubIcon, LinkedInIcon, DownloadIcon } from "./Icons";

// Each line is a list of [tokenClass, text]. Used for simple syntax colouring.
const code = [
  [["kw", "from"], [null, " typing "], ["kw", "import"], [null, " Literal"]],
  [["kw", "from"], [null, " pydantic "], ["kw", "import"], [null, " BaseModel"]],
  [],
  [["kw", "class"], [null, " "], ["cls", "Prediction"], [null, "(BaseModel):"]],
  [[null, "    fraud_probability: "], ["ty", "float"]],
  [[null, "    risk_score: "], ["ty", "float"]],
  [
    [null, "    risk_level: "],
    ["ty", "Literal"],
    [null, "["],
    ["str", '"CRITICAL"'],
    [null, ", "],
    ["str", '"HIGH"'],
    [null, ", "],
    ["str", '"MEDIUM"'],
    [null, ", "],
    ["str", '"LOW"'],
    [null, "]"],
  ],
  [
    [null, "    decision: "],
    ["ty", "Literal"],
    [null, "["],
    ["str", '"BLOCK"'],
    [null, ", "],
    ["str", '"REVIEW"'],
    [null, ", "],
    ["str", '"ALLOW"'],
    [null, "]"],
  ],
];

function CodeCard() {
  return (
    <figure className="editor" aria-label="Code sample: the response model of the fraud detection API">
      <div className="editor-bar">
        <span className="editor-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="editor-file">schemas.py</span>
      </div>
      <pre className="editor-code" tabIndex={0}>
        <code>
          {code.map((line, i) => (
            <span className="code-line" style={{ "--i": i }} key={i}>
              {line.length === 0
                ? "\u00A0"
                : line.map(([cls, text], j) =>
                    cls ? (
                      <span className={`tk-${cls}`} key={j}>
                        {text}
                      </span>
                    ) : (
                      <span key={j}>{text}</span>
                    )
                  )}
            </span>
          ))}
        </code>
      </pre>
      <div className="editor-term" aria-hidden="true">
        <span className="code-line" style={{ "--i": code.length + 1 }}>
          <span className="tk-prompt">$</span> uvicorn app.main:app --reload
        </span>
        <span className="code-line dim" style={{ "--i": code.length + 3 }}>
          Application startup complete.
        </span>
      </div>
      <figcaption className="editor-caption">
        The response model behind my fraud detection engine.
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">{site.name}</h1>
          <p className="hero-role">{site.role}</p>
          <p className="hero-headline">{site.headline}</p>
          <p className="hero-summary">{site.summary}</p>

          <div className="hero-actions">
            <LinkButton href="#projects" variant="primary" external={false}>
              View Projects
            </LinkButton>
            <LinkButton
              href={site.resume}
              variant="secondary"
              icon={<DownloadIcon />}
              external={false}
              download
            >
              Download Resume
            </LinkButton>
          </div>
          <div className="hero-actions hero-social">
            <LinkButton href={site.github} icon={<GitHubIcon />} missingLabel="Add your GitHub URL in src/data/site.js">
              GitHub
            </LinkButton>
            <LinkButton href={site.linkedin} icon={<LinkedInIcon />} missingLabel="Add your LinkedIn URL in src/data/site.js">
              LinkedIn
            </LinkButton>
          </div>
        </div>

        <CodeCard />
      </div>
    </section>
  );
}
