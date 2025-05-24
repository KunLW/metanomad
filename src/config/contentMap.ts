// src/config/contentMap.ts

const bgGreen = "linear-gradient(to bottom, #ffffff 10%, #EBFFB4 60%, #A1D985 100%)";
const bgBlue = "linear-gradient(to bottom, #ffffff 10%,rgb(133, 189, 217) 60%,rgb(180, 245, 255) 100%)";
const bgYellow = "linear-gradient(to bottom, #ffffff 10%,rgb(248, 255, 180) 60%,rgb(217, 204, 133) 100%)";

export const contentMap: {
  [key: string]: {
    title: string;
    subtitle: string;
    videoSrc: string;
    floatingText: string;
    stats: { icon: string; label: string; value: number; colorClass: string }[];
    bgColor: string;
  };
} = {
  "des-happy": {
    title: "Sunshine at the Beach",
    subtitle: "Time: Today Location: Tropical Coast",
    videoSrc: "/videos/des-happy.mp4",
    floatingText: "Waves meet joy under the sun.",
    stats: [
      { icon: "/Desert.png", label: "ocean", value: 80, colorClass: "fill-1" },
      { icon: "☀️", label: "sun", value: 90, colorClass: "fill-2" },
      { icon: "😄", label: "happy", value: 95, colorClass: "fill-3" },
    ],
    bgColor: bgYellow,
  },
  "for-calm": {
    title: "Rain in the Forest",
    subtitle: "Time: Twilight Location: Quiet Grove",
    videoSrc: "/forest_rain.mp4",
    floatingText: "Let the rain carry your thoughts.",
    stats: [
      { icon: "🌲", label: "forest", value: 85, colorClass: "fill-1" },
      { icon: "🌧️", label: "rain", value: 70, colorClass: "fill-2" },
      { icon: "😌", label: "calm", value: 80, colorClass: "fill-3" },
    ],
    bgColor: bgGreen,
  },
};