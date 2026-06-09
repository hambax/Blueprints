import { ArrowUpRight, ChevronDown, Download, Sparkles } from "lucide-react";

export function BlueprintCard({ isOpen = true, kit, onToggle }) {
  const blueprintSlug = slugify(kit.title);
  const blueprintPath = `${import.meta.env.BASE_URL}blueprints/${blueprintSlug}.md`;

  return (
    <article className={isOpen ? "blueprint-card open" : "blueprint-card compact"}>
      <button
        className="accordion-summary"
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="summary-copy">
          <strong>{kit.hook}</strong>
          <span>{kit.title}</span>
        </span>
        <span className="summary-badges">
          <span className="category-label">{kit.pain}</span>
          <span className="setup-time">{kit.effort}</span>
          <ChevronDown aria-hidden="true" className="accordion-chevron" size={20} />
        </span>
      </button>

      <div className="card-content" aria-hidden={!isOpen}>
        <div className="card-topline">
          <Sparkles aria-hidden="true" size={16} />
        </div>
        <h3>{kit.hook}</h3>
        <p>{kit.promise}</p>
        <ul className="card-bullet-list">
          {kit.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <div className="asset-list" aria-label={`${kit.title} included assets`}>
          {kit.includes.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="card-footer">
          <div className="card-actions">
            <a className="icon-link" href="#preview" aria-label={`Preview ${kit.title}`}>
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
            <a
              className="download-link"
              href={blueprintPath}
              download={`${blueprintSlug}.md`}
              aria-label={`Download ${kit.title}`}
            >
              <Download aria-hidden="true" size={16} />
              Download
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
