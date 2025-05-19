import { useNavigate } from 'react-router-dom'


import './Question.css'
import { FancyButton } from "../components/FancyButton";
import ImageGallery, { images3 } from '../components/ImageGallery';

function Questions() {
  const navigate = useNavigate();

  return (
    <div className="screen red-screen">
      <div style={{ position: "relative", zIndex: 1 }}>
        <p className="question-paragraph">Answer a few simple questions
to shape your digital avatar.</p>
        <h1 className="question-title">How do you feel?</h1>
        <div style={{ padding: "30px" }}>
          <ImageGallery images={images3} />
        </div>
        <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <FancyButton text="Back" onClick={() => navigate("/question2")} />
            <div style={{ width: "30px" }}></div>
            <FancyButton text="Next" onClick={() => navigate("/resultpage")} />
        </div>
      </div>
    </div>
  )
}

export default Questions