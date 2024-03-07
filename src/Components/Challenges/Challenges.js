import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../Assets/img1.png';
import img2 from '../../Assets/img2.png';
import img3 from '../../Assets/img3.png';
import techquest from '../../Assets/TECHQUEST.png';
import solnc from '../../Assets/solnc.png';
import backgroundimage from '../../Assets/background_image.jpg';
import './Challenges.css'; 

const Challenges = () => {
  const [cartAnimation, setCartAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setCartAnimation(true);
  }, []);

  return (
    <div style={{backgroundImage: `url(${backgroundimage})`, minHeight: '100vh', padding: '20px' }}>
      <Carousel showArrows={true} showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
        <div style={{ position: 'relative' }}>
          <img src={img1} alt="Image 1" style={{ width: '100%', height: 'auto' }}/>
        </div>
        <div style={{ position: 'relative' }}>
          <img src={img2} alt="Image 2" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div style={{ position: 'relative' }}>
          <img src={img3} alt="Image 3" style={{ width: '100%', height: 'auto' }}/>
        </div>
      </Carousel>
      <h1 style={{ textAlign: 'center', color: '#666', fontWeight: 'bold' }}>CHALLENGES</h1>
      <div className="cart-container">
        <div className={cartAnimation ? "cart" : ""}>
          <img src={solnc} alt="Image 1" style={{ width: '400px', height: '250px', borderRadius: '30%' }}/>
          <h4>Google Solution Challenge</h4>
          <p>The Google Solution Challenge, managed by GDSC India & led by Aaradhya Badal, aimed to tackle UN Sustainable Development Goals using Google technology. It included awareness campaigns, mentorship, and an India Regional Bootcamp, where projects like "Learn Hub" & AI in Healthcare were developed, culminating in an inspiring journey.</p>
        </div>
        <div className={cartAnimation ? "cart" : ""}>
          <img src={techquest} alt="Image 2" style={{ width: '400px', height: '250px', borderRadius: '30%' }}/>
          <h4>TechQuest</h4>
          <p>TechQuest is a digital treasure hunt organized by SymbiTech, offering participants an exhilarating adventure through the realm of technology and innovation. Participants engage in a series of challenges and puzzles designed to test their knowledge, problem-solving abilities, and creativity in various tech-related domains.</p>
        </div>
      </div>
    </div>
  );
};

export default Challenges;




