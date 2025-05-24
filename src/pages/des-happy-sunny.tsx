
import "../components/Generate.css"
import React from "react";
import GeneratePageContent from "../components/GeneratePageContent";

const DesHappySunny: React.FC = () => {
  return (
    <GeneratePageContent
      title="Sunshine at the Beach"
      subtitle="Time: Today Location: Tropical Coast"
      videoSrc="/videos/des-happy.mp4"
      floatingText="Waves meet joy under the sun."
      stats={[
        { icon: "🌊", label: "ocean", value: 80, colorClass: "fill-1" },
        { icon: "☀️", label: "sun", value: 90, colorClass: "fill-2" },
        { icon: "😄", label: "happy", value: 95, colorClass: "fill-3" },
      ]}
      bgColor="linear-gradient(to bottom, #ffffff 10%,rgb(248, 255, 180) 60%,rgb(217, 204, 133) 100%)"
    />
  );
};

export default DesHappySunny;