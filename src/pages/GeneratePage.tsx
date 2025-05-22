

import React, { useEffect, useState } from "react";

const GeneratePage: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: string]: string | null }>({});

  useEffect(() => {
    const location = localStorage.getItem("question1_selectedId");
    const weather = localStorage.getItem("question2_selectedId");
    const emotion = localStorage.getItem("question3_selectedId");
    setAnswers({
      location,
      weather,
      emotion,
    });

  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Selected Answers</h1>
        <p><strong>Location:</strong> {answers.location?? "Not selected"}</p>
        <p><strong>Weather:</strong> {answers.weather?? "Not selected"}</p>
        <p><strong>Emotion:</strong> {answers.emotion?? "Not selected"}</p>
    </div>
  );
};

export default GeneratePage;