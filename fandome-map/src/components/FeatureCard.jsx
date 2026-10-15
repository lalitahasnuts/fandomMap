import { useNavigate } from "react-router-dom";

export default function FeatureCard({ icon, title, stat, to }) {
  const navigate = useNavigate();

  return (
    <button className="feature" onClick={() => navigate(to)}>
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p className="muted feature-stat">{stat}</p>
    </button>
  );
}