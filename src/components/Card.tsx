
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../app/styles/card.css';

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize(); // Set initial screen size

    window.addEventListener('resize', handleResize); // Listen for window resize
    return () => window.removeEventListener('resize', handleResize); // Clean up on unmount
  }, []);

  return (
    <div className={`card ${!isSmallScreen ? 'card-sm' : ''}`} data-aos="zoom-in-up">
      <div>
        <Image
          className={`card-image ${!isSmallScreen ? 'card-image-sm' : ''}`}
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className='card-content'></div>
      <div className='card-title'>{title}</div>
      <div>{desc}</div>
      <div>
        {tags.map((el) => (
          <div className='card-tags' key={el}>
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

