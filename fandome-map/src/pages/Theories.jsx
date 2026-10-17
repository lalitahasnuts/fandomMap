import { useState } from "react";
import theories from "../data/theories.json";
import TheoryCard from "../components/TheoryCard"

export default function Theories() {
  const [spoilerMax, setSpoilerMax] = useState(3);
  const [query, setQuery] = useState("");

const filtered = theories.filter((t) => {
  const q = query.trim().toLowerCase();
  const matchesQuery =
    q === "" ||
    t.title.toLowerCase().includes(q) ||
    t.tags.some((tag) => tag.toLowerCase().includes(q));
  const matchesSpoiler = t.spoiler <= spoilerMax;
  return matchesQuery && matchesSpoiler;
});

  return (
    <div>
      <section className="tool-bar">
        <input
        className="search-input"
        placeholder="Поиск по теориям и тегам..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <label>
        Cпойлеры до:
        <input
          type="range" min="1" max="3"
          value={spoilerMax}
          onChange={e => setSpoilerMax(+e.target.value)}
        />
        <span className="theory-spoiler-val">{spoilerMax}</span>
      </label>
      </section>

      {filtered.length === 0 ? (
        <p className="muted">Ничего не найдено</p>
      ) : (
        <div className="theory-grid">
          {filtered.map(t => (
            <TheoryCard key={t.id} theory={t} maxSpoiler={spoilerMax} />
          ))}
        </div>
      )}
      
    </div>
  );
}