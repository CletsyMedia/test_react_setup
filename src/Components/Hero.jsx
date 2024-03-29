// import React, { useState } from 'react';
// import './App.css'; // Import CSS file for styling

// const Hero = () => {
//   const [currentImage, setCurrentImage] = useState(1); // Initialize to 0
//   const images = [
//     '/assets/img1.jpg',
//     '/assets/img3.jpg',
//     '/assets/img4.jpg',
//     '/assets/img5.jpg',
//     '/assets/img6.jpg',
//     '/assets/img7.jpg',
//     '/assets/img8.jpg',
//     '/assets/img9.jpg',
//     '/assets/img10.jpg',
//     '/assets/img11.jpg',
//   ];

//   const handlePrev = () => {
//     setCurrentImage(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentImage(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="hero-container">
//       <div className="hero-image" style={{ backgroundImage: `url(${images[currentImage]})` }}></div>

//       <div className="hero-content">
//         <button className="prev" onClick={handlePrev}>Prev</button>
//         <button className="next" onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// }

// export default Hero;
