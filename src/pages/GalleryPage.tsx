import React from "react";
import ImageGallery from "../components/ImageGallery";

const GalleryPage: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Photo Gallery</h1>
      <p>Click on an image to select it.</p>
      <ImageGallery />
    </div>
  );
};

export default GalleryPage;