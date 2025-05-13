import React from "react";
import ColorSVG from "./assets/color_bg.svg?react";

const ColorSVGWithMarker: React.FC = () => (
  <g transform="translate(-1200, -1200)">
    <ColorSVG />
  </g>
);

export type ShapeConfig = {
  scale?: number;
  angle: number;
  distance: number;
  extraStyle?: React.CSSProperties;
};

type BackgroundProps = {
  rotationSpeed?: number;
  shapes?: ShapeConfig[];
  svgContent: React.ReactNode;  // 你希望重复使用的图形
};

export const Background: React.FC<BackgroundProps> = ({
  rotationSpeed = 20,
  shapes = [],
  svgContent,
}) => {
  return (
    <svg
      width="100vw"
      height="100vh"
      // viewBox="0 0 1000 1000"
      // preserveAspectRatio="xMidYMid meet"
      // style={{
      //   position: "fixed",
      //   top: "50%",
      //   left: "50%",
      //   transform: "translate(-50%, -50%)",
      // }}
    >
      {/* Visual markers for center and rotation axis */}
      <g
        style={{
          animation: `spin ${rotationSpeed}s linear infinite`,
          transformOrigin: "500px 500px",
        }}
      >
        {shapes.map((shape, index) => {
          const cx = 500 + shape.distance * Math.cos((shape.angle * Math.PI) / 180);
          const cy = 500 + shape.distance * Math.sin((shape.angle * Math.PI) / 180);
          const scale = shape.scale ?? 1;

          return (
            <g
              key={index}
              transform={`translate(${cx}, ${cy}) scale(${scale})`}
              style={shape.extraStyle}
            >
              <g transform="translate(0, -50)">
                {svgContent}
              </g>
            </g>
          );
        })}
      </g>
    </svg>
  );
};


// usage example
  
  export const SvgBackground = () => (
    <Background
      rotationSpeed={15}
      svgContent={<ColorSVGWithMarker />}
      shapes={[
        { angle: 0, distance: 0, scale: 1 },
      ]}
    />
  );