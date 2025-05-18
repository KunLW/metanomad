import React, { useState } from "react";
import "./ImageGallery.css";

// Define the type of each image object
interface ImageItem {
  id: number;
  src: string;
}

// Define the list of images
export const images1: ImageItem[] = [
  { id: 1, src: "/Desert.png" },
  { id: 2, src: "/Hill.png" },
  { id: 3, src: "/Mountain.png" },
  { id: 4, src: "/Forest.png" },
  { id: 5, src: "/Plain.png" },
  { id: 6, src: "/Seashore.png" },
];

export const images2: ImageItem[] = [
  { id: 1, src: "/Hill.png" },
  { id: 2, src: "/Desert.png" },
  { id: 3, src: "/Mountain.png" },
  { id: 4, src: "/Forest.png" },
  { id: 5, src: "/Plain.png" },
  { id: 6, src: "/Seashore.png" },
];


interface ImageGalleryProps {
  images: ImageItem[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setSelectedId(id);
    console.log("Selected image ID:", id);
  };

  return (
    <div className="image-container">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={`Image ${image.id}`}
          className={`image-item ${hoveredId === image.id ? "hovered" : ""} ${selectedId === image.id ? "selected" : ""}`}
          onMouseEnter={() => setHoveredId(image.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => handleClick(image.id)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;




