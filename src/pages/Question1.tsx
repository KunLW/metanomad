import { useNavigate } from 'react-router-dom'


import './Question1.css'
import { FancyButton } from "../components/FancyButton";
import ImageGallery from '../components/ImageGallery';

function Questions() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 className="title">Question 1</h1>
        <div style={{ padding: "20px" }}>
          <p>Click on an image to select it.</p>
          <ImageGallery />
        </div>
        <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <FancyButton text="Back" onClick={() => navigate("/")} />
            <div style={{ width: "20px" }}></div>
            <FancyButton text="Next" onClick={() => navigate("/question2")} />
        </div>
      </div>
    </div>
  )
}

export default Questions