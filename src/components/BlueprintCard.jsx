import { ArrowUpRight, Download, Sparkles } from "lucide-react";

export function BlueprintCard({ kit }) {
  return (
    <article className="blueprint-card">
      <div className="card-content">
        <div className="card-topline">
          <span className="category-label">{kit.category}</span>
          <Sparkles aria-hidden="true" size={16} />
        </div>
        <h3>{kit.title}</h3>
        <p>{kit.outcome}</p>
        <div className="asset-list" aria-label={`${kit.title} included assets`}>
          {kit.includes.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="card-footer">
          <span className="setup-time">{kit.effort}</span>
          <div className="card-actions">
            <a className="icon-link" href="#preview" aria-label={`Preview ${kit.title}`}>
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
            <a
              className="download-link"
              href={`/blueprints/${slugify(kit.title)}.md`}
              download={`${slugify(kit.title)}.md`}
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
