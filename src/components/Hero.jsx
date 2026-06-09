import { ArrowRight, Boxes, Palette, ShieldCheck } from "lucide-react";

export function Hero() {
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
        <h1>Download polished AI-ready operating tools.</h1>
        <p className="hero-lede">
          Blueprint Platform packages the boring-but-critical parts of business into
          elegant mini web apps, templates, and setup instructions your own LLM can
          adapt to your company.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#catalog">
            Explore blueprints
            <ArrowRight aria-hidden="true" size={18} />
          </a>
          <a className="button button-secondary" href="#method">
            See the method
          </a>
        </div>
      </div>

      <aside
        className="hero-panel"
        aria-label="Blueprint platform summary"
        onMouseLeave={resetPanelTilt}
        onMouseMove={handlePanelPointerMove}
      >
        <div className="hero-panel-content">
          <div className="panel-header">
            <span>Blueprint kit anatomy</span>
            <span className="status-pill">v1 library</span>
          </div>
          <div className="stack-preview">
            <div className="preview-row">
              <Boxes aria-hidden="true" size={20} />
              <div>
                <strong>Reusable modules</strong>
                <span>Web UI, prompts, schemas, and setup notes.</span>
              </div>
            </div>
            <div className="preview-row">
              <Palette aria-hidden="true" size={20} />
              <div>
                <strong>Brand tokens</strong>
                <span>Accent color, radius, typography, and spacing in one place.</span>
              </div>
            </div>
            <div className="preview-row">
              <ShieldCheck aria-hidden="true" size={20} />
              <div>
                <strong>Domain patterns</strong>
                <span>Built around real business workflows and compliance sense.</span>
              </div>
            </div>
          </div>
          <div className="blueprint-mini-map" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </aside>
    </section>
  );
}
