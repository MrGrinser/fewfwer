import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import '../styles/slideshow.css'; // Import your CSS file for styling

const Slideshow = ({ images, interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div className="slideshow">
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt={`Slide ${i}`}
          className={i === index ? 'active' : ''}
        />
      ))}
    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired, 
  interval: PropTypes.number 
};

export default Slideshow;
