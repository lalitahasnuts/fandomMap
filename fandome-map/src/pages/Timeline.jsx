import { useState } from "react";
import events from "../data/events.json"
import EventItem from "../components/EventItem";

export default function Timeline() {
  const regions = [...new Set(events.map((e) => e.region))];
  const [activeRegion, setActiveRegion] = useState(regions[0]);
  const [maxSpoiler, setMaxSpoiler] = useState(2);

  const filtered = events.filter((e) => e.region === activeRegion);

  return (
    <div>
      <div className="tabs">
        {regions.map((region) => (
          <button 
            key={region}
            className={region === activeRegion ? "active" : ""}
            onClick={() => setActiveRegion(region)}
          >
            {region}
          </button>
        ))}
      </div>

      <div className="timeline">
        {filtered.map((event) => (
          <EventItem key={event.id} event={event} maxSpoiler={maxSpoiler} />
        ))}
      </div>
    </div>
  );
}