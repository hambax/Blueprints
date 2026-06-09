import { useMemo, useState } from "react";
import { BlueprintBackground } from "./components/BlueprintBackground.jsx";
import { BlueprintCatalog } from "./components/BlueprintCatalog.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { blueprintKits, catalogGroups, painFilters, personas } from "./data/blueprints.js";

function App() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blueprintKits.map((kit) => kit.category)))],
    []
  );
  const featuredKits = useMemo(() => blueprintKits.filter((kit) => kit.featured), []);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePain, setActivePain] = useState("All");

  const visibleKits = useMemo(() => {
    return blueprintKits.filter((kit) => {
      const matchesPain = activePain === "All" || kit.pain === activePain;
      const matchesCategory = activeCategory === "All" || kit.category === activeCategory;

      return matchesPain && matchesCategory;
    });
  }, [activeCategory, activePain]);

  return (
    <div className="app-shell blueprint-stage">
      <BlueprintBackground />
      <Navigation />
      <main>
        <Hero featuredKits={featuredKits} />
        <BlueprintCatalog
          activeCategory={activeCategory}
          activePain={activePain}
          catalogGroups={catalogGroups}
          categories={categories}
          kits={visibleKits}
          painFilters={painFilters}
          personas={personas}
          onCategoryChange={setActiveCategory}
          onPainChange={setActivePain}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
