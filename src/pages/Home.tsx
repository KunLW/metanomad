import { Link, useNavigate } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import { FancyButton } from "../components/FancyButton";

import { ExampleBackground } from "../components";
import { SvgBackground } from '../svg_bg';
import ColorSVG from "../assets/color_bg.svg";
function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
      <SvgBackground />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <h1>Welcome, traveler</h1>
        <h2>Here, create your own digital avatar.</h2>
        <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <FancyButton text="开始" onClick={() => navigate("/start")} />
        </div>
      </div>
    </>
  )
}

export default Home