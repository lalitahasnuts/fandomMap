import { useState } from "react";

export default function EventItem({ event, maxSpoiler }) {
  const [revealed, setRevealed] = useState(false);
  const isLocked = event.spoiler > maxSpoiler && !revealed;

  return (
    <div className="event">
      <div className="event-title">
        {event.title}
        <span className="spoiler-badge">🔒 ур. {event.spoiler}</span>
      </div>

      {isLocked ? (
        <div
          className="spoiler-block"
          onClick={() => setRevealed(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setRevealed(true);
          }}
        >
          🔒🔒🔒 Спойлер уровня {event.spoiler} — нажмите, чтобы показать
        </div>
      ) : (
        <>
          <div className="event-body">{event.description}</div>
          <div className="tags">
            {event.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}