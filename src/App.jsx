import { useEffect, useMemo, useState } from "react";
import { BlueprintBackground } from "./components/BlueprintBackground.jsx";
import { BlueprintCatalog } from "./components/BlueprintCatalog.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { blueprintKits } from "./data/blueprints.js";

const featuredLiquidTargets = ".hero-panel.liquid-card";

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

  useEffect(() => {
    const initializeGlass = () => {
      if (!window.liquidGL || !window.html2canvas) {
        document.documentElement.classList.add("liquidgl-unavailable");
        return;
      }

      try {
        window.liquidGL({
          target: featuredLiquidTargets,
          snapshot: ".blueprint-stage",
          resolution: 1,
          refraction: 0.045,
          bevel: 0.08,
          frost: 0.18,
          shadow: false,
          tilt: false,
          zIndex: 6
        });
      } catch (error) {
        document.documentElement.classList.add("liquidgl-unavailable");
        console.warn("liquidGL failed to initialize; CSS glass fallback is active.", error);
      }
    };

    const timeoutId = window.setTimeout(initializeGlass, 350);
    return () => window.clearTimeout(timeoutId);
  }, []);

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
