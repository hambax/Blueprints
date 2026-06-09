import { useMemo, useState } from "react";
import { BlueprintBackground } from "./components/BlueprintBackground.jsx";
import { BlueprintCatalog } from "./components/BlueprintCatalog.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { blueprintKits } from "./data/blueprints.js";

function App() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blueprintKits.map((kit) => kit.category)))],
    []
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleKits = useMemo(() => {
    if (activeCategory === "All") {
      return blueprintKits;
    }

    return blueprintKits.filter((kit) => kit.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="app-shell blueprint-stage">
      <BlueprintBackground />
      <Navigation />
      <main>
        <Hero />
        <BlueprintCatalog
          activeCategory={activeCategory}
          categories={categories}
          kits={visibleKits}
          onCategoryChange={setActiveCategory}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
