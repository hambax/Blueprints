import { ArrowDownToLine } from "lucide-react";

export function Navigation() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="Blueprint Platform home">
        <span className="brand-mark">BP</span>
        <span>Blueprint Platform</span>
      </a>
      <nav className="main-nav" aria-label="Primary navigation">
        <a href="#catalog">Catalog</a>
        <a href="#bundles">Bundles</a>
        <a href="#method">Method</a>
      </nav>
      <a className="nav-cta" href="#catalog">
        <ArrowDownToLine aria-hidden="true" size={16} />
        Browse Kits
      </a>
    </header>
  );
}
