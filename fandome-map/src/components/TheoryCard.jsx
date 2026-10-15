export default function TheoryCard({ theory, maxSpoiler = 3 }) {
  const locked = theory.spoiler > maxSpoiler;

  return (
    <article className="card theory-card">
      <div className="theory-head">
        <h3>{theory.title}</h3>
        <span className="spoiler-badge">🔒 ур. {theory.spoiler}</span>
      </div>

      {locked ? (
        <div className="spoiler-block">
          🔒 Спойлер уровня {theory.spoiler} — поднимите ползунок, чтобы увидеть
        </div>
      ) : (
        <ul>
          {theory.arguments.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      )}

      <div className="tags">
        {theory.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </article>
  );
}