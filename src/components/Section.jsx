export default function Section({ id, title, intro, split = true, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className={`container section-grid${split ? " is-split" : ""}`}>
        <header className="section-head">
          <h2 id={`${id}-title`}>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </header>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}
