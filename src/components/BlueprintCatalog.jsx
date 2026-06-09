import { useEffect, useState } from "react";
import { BlueprintCard } from "./BlueprintCard.jsx";

export function BlueprintCatalog({
  activeCategory,
  activePain,
  catalogGroups,
  categories,
  kits,
  painFilters,
  personas,
  onCategoryChange,
  onPainChange
}) {
  const groupedKits = catalogGroups
    .map((group) => ({
      group,
      kits: kits.filter((kit) => kit.group === group)
    }))
    .filter((section) => section.kits.length > 0);
  const [openByGroup, setOpenByGroup] = useState({});

  useEffect(() => {
    setOpenByGroup(
      Object.fromEntries(groupedKits.map((section) => [section.group, section.kits[0]?.title]))
    );
  }, [activeCategory, activePain]);

  const handleToggle = (group, title) => {
    setOpenByGroup((current) => ({
      ...current,
      [group]: current[group] === title ? null : title
    }));
  };

  return (
    <section className="catalog-section" id="catalog">
      <div className="section-heading">
        <p className="eyebrow">Find the pain</p>
        <h2>{activePain === "All" ? "What is hurting today?" : `${activePain}, handled.`}</h2>
        <p>
          Start with the job that is wasting time. Then pick the kit that gets it off
          your plate.
        </p>
      </div>

      <div className="filter-panel" id="all-kits">
        <div className="pain-filter-bar" aria-label="Filter blueprint kits by pain point">
          <button
            className={activePain === "All" ? "pain-chip active" : "pain-chip"}
            onClick={() => onPainChange("All")}
            type="button"
          >
            All pains
          </button>
          {painFilters.map((pain) => (
            <button
              className={pain === activePain ? "pain-chip active" : "pain-chip"}
              key={pain}
              onClick={() => onPainChange(pain)}
              type="button"
            >
              {pain}
            </button>
          ))}
        </div>

        <div className="persona-strip" aria-label="Common visitors">
          {personas.map((persona) => (
            <span key={persona}>{persona}</span>
          ))}
        </div>

        <div className="category-bar" aria-label="Filter blueprint kits by category">
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
      </div>

      {groupedKits.length > 0 ? (
        <div className="catalog-groups">
          {groupedKits.map((section) => (
            <section className="catalog-group" key={section.group}>
              <div className="group-heading">
                <h3>{section.group}</h3>
                <span>{section.kits.length} {section.kits.length === 1 ? "kit" : "kits"} / tap to open</span>
              </div>
              <div className="accordion-list" aria-label={`${section.group} blueprint kits`}>
                {section.kits.map((kit) => (
                  <BlueprintCard
                    isOpen={openByGroup[section.group] === kit.title}
                    key={kit.title}
                    kit={kit}
                    onToggle={() => handleToggle(section.group, kit.title)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No exact match yet.</h3>
          <p>Clear a filter to see the nearest blueprint kit.</p>
        </div>
      )}
    </section>
  );
}
