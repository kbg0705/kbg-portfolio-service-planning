import { workSteps } from '../data/process';

export function WorkProcess() {
  return (
    <section className="process-section" id="process" aria-labelledby="process-title">
      <div className="section-intro section-intro--inline">
        <p className="eyebrow">Operating System</p>
        <h2 id="process-title">How I Work</h2>
      </div>
      <div className="process-list">
        {workSteps.map((step) => (
          <article className="process-row" key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <strong>{step.outputs}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
