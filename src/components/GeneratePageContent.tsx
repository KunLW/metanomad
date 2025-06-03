import "./Generate.css";
import { FancyButton } from "./FancyButton";
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import { SvgBackground } from "../SvgBackground";

type Stat = {
  icon: string;
  value: number; // 0-100
};

type GeneratePageProps = {
  title: string;
  titleColor: string;
  time: string;
  location: string;
  videoSrc: string;
  floatingText: string;
  stats: Stat[];
  statsColor: string;
  statsBgColor: string;
};

const StatsBar: React.FC<{ stats: Stat[]; statsColor?: string; statsBgColor?: string }> = ({ stats, statsColor, statsBgColor }) => (
  <div className="stats">
    {stats.map((stat, index) => (
      <div className="stat" key={index}>
        <img src={`/icon/${stat.icon}.png`} alt={stat.icon} style={{ width: 24, height: 24 }} />
        <div className="bar" style={{ backgroundColor: statsBgColor }}>
  <div className="fill" style={{ width: `${stat.value}%`, backgroundColor: statsColor }}></div>
</div>
      </div>
    ))}
  </div>
);

const GeneratePageContent: React.FC<GeneratePageProps> = ({
  title,
  titleColor,
  time,
  location,
  videoSrc,
  floatingText,
  stats,
  statsColor,
  statsBgColor,
}) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  React.useEffect(() => {
    setShowOverlay(true); // 组件每次被调用时立即显示 loading
  }, [videoSrc]);

  // 复制网页链接到剪切板并提示
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Moodscape Creation",
        text: "Here's what I generated. Pretty surreal, right?",
        url: window.location.href,
      }).catch(err => console.error("Share failed:", err));
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert("copy to the clipboard");
    } else {
      alert("Failed to copy link");
    }
  };

  return (
    <div className="gen-container" ref={containerRef}>
      {showOverlay && (
        <div className="start-page">
  <div className="white-bg" style={{zIndex: 3}}/>
  <SvgBackground orbitA={150} orbitB={40} scale={1} zIndex={4}/>
  <div className="content" style={{ position: "relative", zIndex: 20 }}>
    <h1 className="title">The soul is being connected...</h1>
    <p className="title multiline">
      Your digital avatar is about to awaken.
    </p>
  </div>
</div>
      )}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        onCanPlayThrough={() => setShowOverlay(false)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="gen-left">
        <p className="gen-subtitle" style={{ color: titleColor }}>{time}<br /> {location}</p>
        <h1 className="gen-title" dangerouslySetInnerHTML={{ __html: title }} style={{ color: titleColor }}></h1>

        <StatsBar stats={stats} statsColor={statsColor} statsBgColor={statsBgColor} />

        <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} ref={buttonsRef}>
          <FancyButton text="Home" onClick={() => navigate("/")} />
          <div style={{ width: "30px" }}></div>
          <FancyButton text="Share" onClick={handleShare} />
        </div>
      </div>

      <div className="gen-floating-text">{floatingText}</div>
    </div>
  );
};

export default GeneratePageContent;