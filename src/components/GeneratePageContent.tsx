import "./Generate.css";
import { FancyButton } from "./FancyButton";
import { useNavigate } from "react-router-dom";

type Stat = {
  icon: string;
  label: string;
  value: number; // 0-100
  colorClass: string;
};

type GeneratePageProps = {
  title: string;
  subtitle: string;
  videoSrc: string;
  floatingText: string;
  stats: Stat[];
  bgColor: string;
};

const StatsBar: React.FC<{ stats: Stat[] }> = ({ stats }) => (
  <div className="stats">
    {stats.map((stat, index) => (
      <div className="stat" key={index}>
        {stat.icon.startsWith("http") || stat.icon.startsWith("/") ? (
          <img src={stat.icon} alt={stat.label} style={{ width: 24, height: 24 }} />
        ) : (
          <span role="img" aria-label={stat.label}>{stat.icon}</span>
        )}
        <div className="bar">
          <div className={`fill ${stat.colorClass}`} style={{ width: `${stat.value}%` }}></div>
        </div>
      </div>
    ))}
  </div>
);

const GeneratePageContent: React.FC<GeneratePageProps> = ({
  title,
  subtitle,
  videoSrc,
  floatingText,
  stats,
  bgColor
}) => {
  const navigate = useNavigate();
  return (
    <div className="gen-container" style={{ background: bgColor }}>
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="gen-left">
        <p className="gen-subtitle">{subtitle}</p>
        <h1 className="gen-title" dangerouslySetInnerHTML={{ __html: title }}></h1>

        <StatsBar stats={stats} />

        <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <FancyButton text="Home" onClick={() => navigate("/")} />
          <div style={{ width: "30px" }}></div>
          <FancyButton text="Share" onClick={() => navigate("/")} />
        </div>
      </div>

      <div className="gen-floating-text">{floatingText}</div>
    </div>
  );
};

export default GeneratePageContent;