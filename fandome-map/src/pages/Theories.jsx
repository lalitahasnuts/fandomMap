import { useState } from "react";
import theories from "../data/theories.json";

export default function Theories() {
  const [spoilerMax, setSpoilerMax] = useState(3);
  const [query, setQuery] = useState("");

  const filtered = theories.filter(t =>
    t.spoilerLevel <= spoilerMax &&
    (query === "" || t.title.toLowerCase().includes(query.toLowerCase()))
  );

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

      {filtered.map(t => (
        <div key={t.id} className="card">
          <h3>{t.title}</h3>
          {t.spoilerLevel > spoilerMax
            ? <p>Спойлер</p>
            : <ul>{t.arguments.map((a, i) => <li key={i}>{a}</li>)}</ul>
          }
        </div>
      ))}
    </div>
  );
}