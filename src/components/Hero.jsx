import { ArrowRight, Download, Sparkles } from "lucide-react";

export function Hero({ featuredKits }) {
  const handlePanelPointerMove = (event) => {
    const panel = event.currentTarget;
    const rect = panel.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    panel.style.setProperty("--tilt-x", `${(-y * 8).toFixed(2)}deg`);
    panel.style.setProperty("--tilt-y", `${(x * 10).toFixed(2)}deg`);
    panel.style.setProperty("--glow-x", `${((x + 0.5) * 100).toFixed(1)}%`);
    panel.style.setProperty("--glow-y", `${((y + 0.5) * 100).toFixed(1)}%`);
  };

  const resetPanelTilt = (event) => {
    const panel = event.currentTarget;
    panel.style.removeProperty("--tilt-x");
    panel.style.removeProperty("--tilt-y");
    panel.style.removeProperty("--glow-x");
    panel.style.removeProperty("--glow-y");
  };

  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <h1>Business admin, already solved.</h1>
        <p className="hero-lede">
          Polished, downloadable operating kits for owners who are done losing nights
          to invoices, follow-up, cashflow, and the small work that quietly eats the week.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#catalog">
            Find your blueprint
            <ArrowRight aria-hidden="true" size={18} />
          </a>
          <a className="button button-secondary" href="#all-kits">
            Browse all kits
          </a>
        </div>
      </div>

      <div className="hero-apps" aria-label="Featured blueprint apps">
        {featuredKits.map((kit) => {
          const blueprintSlug = slugify(kit.title);
          const blueprintPath = `${import.meta.env.BASE_URL}blueprints/${blueprintSlug}.md`;

          return (
            <article
              className="hero-panel hero-app-card"
              key={kit.title}
              onMouseLeave={resetPanelTilt}
              onMouseMove={handlePanelPointerMove}
            >
              <div className="hero-panel-content">
                <div className="panel-header">
                  <span>{kit.category}</span>
                  <span className="status-pill">{kit.effort}</span>
                </div>
                <Sparkles aria-hidden="true" className="hero-card-icon" size={18} />
                <h2>{kit.hook}</h2>
                <p>{kit.promise}</p>
                <ul className="hero-bullet-list">
                  {kit.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="hero-card-actions">
                  <a className="text-link" href="#catalog">
                    Preview kit
                    <ArrowRight aria-hidden="true" size={16} />
                  </a>
                  <a
                    className="download-link"
                    href={blueprintPath}
                    download={`${blueprintSlug}.md`}
                  >
                    <Download aria-hidden="true" size={16} />
                    Download blueprint
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
