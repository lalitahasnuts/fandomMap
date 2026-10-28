import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
import TheoryCard from "../components/TheoryCard";
import theories from "../data/theories";

const features = [
  {
    icon: "🕸️",
    title: "Карта связей",
    stat: "24 персонажа · 38 связей",
    to: "/map",
  },
  {
    icon: "📜",
    title: "Таймлайн",
    stat: "42 события · 6 регионов", 
    to: "/timeline",
  },
  {
    icon: "💡",
    title: "Теории",
    stat: "15 гипотез с аргументами",
    to: "/theories",
  },
];

export default function Home() {
  const safeTheories = theories.filter((t) => t.spoiler === 1);
  
  const latest = safeTheories.slice(0, 3);

  return (
    <>
      <section className="hero">
        <h1>Исследуй вселенную</h1>
        <p className="muted">
          Связи между персонажами, события по регионам и теории фанатов — в одном месте.
        </p>
      </section>

      <section className="feature-grid">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </section>

      <section>
        <div className="section-header">
          <h2>Последние теории</h2>
          <Link to="/theories" className="muted">смотреть все →</Link>
        </div>

        <div className="theory-grid">
          {latest.map((t) => (
            <TheoryCard key={t.id} theory={t} maxSpoiler={1} />
          ))}
        </div>
      </section>
    </>
  );
}