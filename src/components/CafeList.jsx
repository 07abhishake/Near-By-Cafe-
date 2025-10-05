import React from "react";
import { cafes } from "../data/cafes";

function CafeList({ onSelectCafe }) {
  return (
    <div className="space-y-4 bg-black/5 rounded-lg p-4 h-[600px] overflow-y-auto">
      <h2 className="text-xl font-semibold text-white mb-2">Nearby cafés</h2>

      {cafes.map((cafe) => (
        <div
          key={cafe.id}
          onClick={() => onSelectCafe(cafe)}
          className="bg-white/5 p-3 rounded-md border border-white/10 hover:bg-white/10 cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-white font-semibold">{cafe.name}</h3>
            <span className="text-sm text-neutral-400">{cafe.distance}</span>
          </div>
          <p className="text-neutral-300 text-sm">{cafe.description}</p>
          <div className="flex gap-2 mt-1 flex-wrap">
            {cafe.features.map((f, i) => (
              <span
                key={i}
                className="text-xs bg-white/10 px-2 py-0.5 rounded text-white"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CafeList;
