import { useState } from "react";

function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    if (onSearch) onSearch("");
  };

  return (
    <nav className="bg-black w-full z-50 shadow-md fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">


          <div className="flex items-center space-x-4">
            <button
              onClick={() => window.location.reload()}
              className="bg-white text-black rounded py-2 px-4 font-bold text-lg"
            >
              CF
            </button>

            <h1 className="text-xl font-bold text-white">Find Cafes Nearby</h1>

    
            <div className="flex-1 max-w-md relative">
              <input
                type="text"
                placeholder="Search cafes, drinks, neighborhoods…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-md bg-white/5 pl-4 pr-40 py-3 text-white placeholder-neutral-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              />

              <div className="absolute right-1 top-1/2 -translate-y-1/2 flex gap-2">
                <button
                  onClick={handleClear}
                  className="px-2 py-1 text-sm rounded-md bg-white text-black hover:bg-white/10 border border-white/10"
                >
                  Clear
                </button>
                <button
                  onClick={handleSearch}
                  className="px-3 py-1.5 text-sm rounded-md bg-black text-white "
                >
                  Search
                </button>
              </div>
            </div>
          </div>


          <div className="flex items-center space-x-3">
            <button className="px-3 py-1 bg-white text-black rounded ">
              Location
            </button>
            <button className="px-3 py-1.5 bg-black text-white rounded  border-white/10  focus:outline-none focus:ring-2 focus:ring-white/20">
              Add Cafe
            </button>
            <button className="px-3 py-1 bg-white text-black rounded">
              Profile
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
