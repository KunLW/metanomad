import "./SunlitForest.css";
import { FancyButton } from "../components/FancyButton";
import { useNavigate } from "react-router-dom";

type Stat = {
  icon: string;
  label: string;
  value: number; // Assuming 0-100 scale
  colorClass: string;
};

const StatsBar: React.FC<{ stats: Stat[] }> = ({ stats }) => (
  <div className="stats">
    {stats.map((stat, index) => (
      <div className="stat" key={index}>
        <span role="img" aria-label={stat.label}>{stat.icon}</span>
        <div className="bar">
          <div className={`fill ${stat.colorClass}`} style={{ width: `${stat.value}%` }}></div>
        </div>
      </div>
    ))}
  </div>
);

const SunlitForest = () => {
  const navigate = useNavigate();
  return (
    <div className="sunlit-container">
  <video className="background-video" autoPlay loop muted playsInline>
    <source src="/green_man_long.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
      <div className="sunlit-left">
        <p className="gen-subtitle">Time: 25, May, 2025<br />Location: Xiamen, China</p>
        <h1 className="gen-title">Light-Seeker<br />Within the<br />Sunlit Forest</h1>

        <StatsBar
          stats={[
            { icon: "🌲", label: "forest", value: 0, colorClass: "fill-1" },
            { icon: "☀️", label: "sun", value: 60, colorClass: "fill-2" },
            { icon: "😌", label: "emotion", value: 90, colorClass: "fill-3" },
          ]}
        />
        <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <FancyButton text="Home" onClick={() => navigate("/")} />
            <div style={{ width: "30px" }}></div>
            <FancyButton text="Share" onClick={() => navigate("/")} />
        </div>
      </div>

      <div className="gen-floating-text">Here you are — shaped by light, space, and feeling.</div>
    </div>
  );
};

export default SunlitForest; 
