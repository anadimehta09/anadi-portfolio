import { useState } from "react";
import Section from "./Section";
import LinkButton from "./LinkButton";
import { site } from "../data/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Contact() {
  const [status, setStatus] = useState("");

  // No backend: submitting opens the visitor's email app with the message filled in.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!site.email) {
      setStatus("The email address hasn't been added to this site yet.");
      return;
    }
    const data = new FormData(e.currentTarget);
    const subject = `Portfolio message from ${data.get("name")}`;
    const body = `${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email app with the message filled in.");
  };

  return (
    <Section
      id="contact"
      title="Contact"
      intro="If you're working on something in AI/ML or backend development, I'd like to hear about it."
    >
      <div className="contact-grid">
        <div className="contact-links">
          <LinkButton
            href={site.email ? `mailto:${site.email}` : ""}
            icon={<MailIcon />}
            external={false}
            missingLabel="Add your email in src/data/site.js"
          >
            {site.email || "Email"}
          </LinkButton>
          <LinkButton href={site.github} icon={<GitHubIcon />} missingLabel="Add your GitHub URL in src/data/site.js">
            GitHub
          </LinkButton>
          <LinkButton href={site.linkedin} icon={<LinkedInIcon />} missingLabel="Add your LinkedIn URL in src/data/site.js">
            LinkedIn
          </LinkButton>
        </div>

        <form className="form" onSubmit={handleSubmit} noValidate={false}>
          <label>
            Name
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <div className="form-foot">
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
            <p className="form-note" role="status" aria-live="polite">
              {status || "Sending opens your email app with this message filled in."}
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
}
