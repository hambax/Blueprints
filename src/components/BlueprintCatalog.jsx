import { BlueprintCard } from "./BlueprintCard.jsx";

export function BlueprintCatalog({ activeCategory, categories, kits, onCategoryChange }) {
  return (
    <section className="catalog-section" id="catalog">
      <div className="section-heading">
        <p className="eyebrow">Blueprint library</p>
        <h2>Small tools for expensive operational friction.</h2>
        <p>
          Each kit is a designed starting point: instructions, templates, and a modular
          interface your own AI stack can personalize.
        </p>
      </div>

      <div className="category-bar" aria-label="Filter blueprint kits">
        {categories.map((category) => (
          <button
            className={category === activeCategory ? "category-chip active" : "category-chip"}
            key={category}
            onClick={() => onCategoryChange(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="catalog-grid">
        {kits.map((kit, index) => (
          <BlueprintCard key={kit.title} kit={kit} />
        ))}
      </div>
    </section>
  );
}
