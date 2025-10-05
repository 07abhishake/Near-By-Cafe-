import React, { useState } from "react";
import Navbar from "./components/Navbar";
import FilterPanel from "./components/FliterPanel";
import MapComponent from "./components/MapContainer";
import CafeList from "./components/CafeList";

function App() {
  const [selectedCafe, setSelectedCafe] = useState(null);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Cafe List */}
          <section className="lg:col-span-5">
            <FilterPanel />
            <CafeList onSelectCafe={setSelectedCafe} />
          </section>

          {/* Right: Map */}
          <section className="lg:col-span-7">
            <MapComponent selectedCafe={selectedCafe} />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
