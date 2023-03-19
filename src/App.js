import React, { useState } from "react";

const githubLink = "https://github.com/bikewake/alfresco-document-workflows-17";

const images = [
  { src: "images/doc-workflows1.png", href: githubLink },
  { src: "images/doc-workflows2.png", href: githubLink },
  { src: "images/doc-workflows3.png", href: githubLink },
  { src: "images/doc-workflows4.png", href: githubLink },
  { src: "images/doc-workflows5.png", href: githubLink },
  { src: "images/doc-workflows6.png", href: githubLink },
  { src: "images/doc-workflows7.png", href: githubLink },
  { src: "images/doc-workflows8.png", href: githubLink },
];

function App() {
  const [modalSrc, setModalSrc] = useState(images[0].src);
  const [selectedImage, setSelectedImage] = useState(images[0].src);

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setModalSrc(src);
  };

  const closeModal = () => {
    setModalSrc(null);
  };

  const openUrl = () => {
    window.open(githubLink, "_blank");
  };

  return (
    <div className="gallery">
      <div className="App-header">
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          BikeWake Aikau Workflows
        </a>
      </div>
      <div className="content">
        <div className="prew">
          <div className="items">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={selectedImage === image.src ? "selected" : ""}
                onClick={() => handleImageClick(image.src)}
              />
            ))}
          </div>
        </div>
        {modalSrc && (
          <div className="modal" onClick={openUrl}>
            <img src={modalSrc} alt="modal image" />
          </div>
        )}
        <div class="clear"></div>
      </div>
    </div>
  );
}

export default App;

