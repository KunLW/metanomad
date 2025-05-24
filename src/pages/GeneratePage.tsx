import React, { useEffect, useState } from "react";
import "../components/Generate.css";
import GeneratePageContent from "../components/GeneratePageContent";
import { contentMap } from "../config/contentMap"; // Import the content map

const GeneratePage: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: string]: string | null }>({});
  const [pageContent, setPageContent] = useState<{
    title: string;
    subtitle: string;
    videoSrc: string;
    floatingText: string;
    stats: { icon: string; label: string; value: number; colorClass: string }[];
    bgColor: string;
  } | null>(null);
  const [bgm, setBgm] = useState<string | null>(null);

  useEffect(() => {
    const location = localStorage.getItem("question1_selectedId");
    const weather = localStorage.getItem("question2_selectedId");
    const emotion = localStorage.getItem("question3_selectedId");

    setAnswers({ location, weather, emotion });

    const key = `${location}-${emotion}`;
    const selectedContent = contentMap[key];
    if (selectedContent) {
      setPageContent(selectedContent); // Set to state
    }

    // Set background music based on weather
    let musicUrl = null;
    switch (weather) {
      case "sunny":
        musicUrl = "/music/sunny.mp3";
        break;
      case "rainy":
        musicUrl = "/music/rainy.mp3";
        break;
      case "cloudy":
        musicUrl = "/music/cloudy.mp3";
        break;
      case "stormy":
        musicUrl = "/music/stormy.mp3";
        break;
      case "snowy":
        musicUrl = "/music/snowy.mp3";
        break;
      case "windy":
        musicUrl = "/music/windy.mp3";
        break;
      default:
        musicUrl = null;
    }
    setBgm(musicUrl);

    console.log("Key:", key);
    console.log("Answers:", { location, weather, emotion });
    console.log("Selected Content:", selectedContent);
  }, []);

  return (
    pageContent && (
      <>
        <GeneratePageContent
          title={pageContent.title}
          subtitle={pageContent.subtitle}
          videoSrc={pageContent.videoSrc}
          floatingText={pageContent.floatingText}
          stats={pageContent.stats}
          bgColor={pageContent.bgColor}
        />
        {bgm && <audio src={bgm} autoPlay loop />}
      </>
    )
  );
};

export default GeneratePage;