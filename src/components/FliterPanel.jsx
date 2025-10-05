import { useState } from 'react';

function FilterPanel() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [distance, setDistance] = useState(1);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState('distance');

  const filters = [
    { key: 'open', label: 'Open now', icon: '⏰' },
    { key: 'wifi', label: 'Wi‑Fi', icon: '📶' },
    { key: 'outdoor', label: 'Outdoor', icon: '☀️' },
    { key: 'vegan', label: 'Vegan', icon: '🌿' },
    { key: 'pet', label: 'Pet‑friendly', icon: '🐾' },
    { key: 'takeaway', label: 'Takeaway', icon: '🛍️' },
  ];

  const toggleFilter = (key) => {
    setActiveFilters((prev) =>
      prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
    );
  };

  const distances = [1, 3, 5, 10];
  const sortOptions = [
    { key: 'distance', label: 'Distance', icon: '🛣️' },
    { key: 'rating', label: 'Rating', icon: '⭐' },
    { key: 'open', label: 'Open now', icon: '⏰' },
    { key: 'popular', label: 'Popular', icon: '🔥' },
  ];

  return (
    <div className="rounded-xl border border-white/10 bg-white/5">
      <div className="p-3 sm:p-4 space-y-3">
        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-[13px] text-neutral-400">Filters:</div>
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => toggleFilter(filter.key)}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] border ${
                activeFilters.includes(filter.key)
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
              }`}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </button>
          ))}

          {/* Distance */}
          <div className="ms-auto flex items-center gap-2">
            <div className="hidden sm:flex items-center rounded-md border border-white/10 bg-white/5 overflow-hidden">
              {distances.map((d) => (
                <button
                  key={d}
                  onClick={() => setDistance(d)}
                  className={`px-3 py-1.5 text-[13px] ${
                    distance === d
                      ? 'bg-white text-neutral-900'
                      : 'text-neutral-200 hover:bg-white/10'
                  }`}
                >
                  {d} km
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="relative">
              <button
                onClick={() => setSortMenuOpen(!sortMenuOpen)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white -[13px]"
              >
                <span>⚙️</span>
                Sort
                <span>▼</span>
              </button>

              {sortMenuOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-md border border-white/10 bg-neutral-900 shadow-xl overflow-hidden z-20">
                  {sortOptions.map((s) => (
                    <button
                      key={s.key}
                      onClick={() => {
                        setSortBy(s.key);
                        setSortMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-white/5 text-white flex items-center gap-2"
                    >
                      <span>{s.icon}</span>
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>


        <div className="text-[13px] text-neutral-400">
          Showing cafes within {distance} km • Sorted by{' '}
          {sortOptions.find((s) => s.key === sortBy)?.label}
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
