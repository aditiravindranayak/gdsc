import React from 'react';
import './Core.css'; // Importing the CSS file

import image1 from '../../Assets/1 (4).png';
import image2 from '../../Assets/2 (2).png';
import image3 from '../../Assets/3 (2).png';
import image4 from '../../Assets/4 (4).png';
import image5 from '../../Assets/5 (3).png';
import image6 from '../../Assets/6 (3).png';
import image7 from '../../Assets/7 (2).png';
import image8 from '../../Assets/8 (3).png';
import image9 from '../../Assets/9 (3).png';
import image10 from '../../Assets/10 (3).png';
import image11 from '../../Assets/11 (4).png';
import image12 from '../../Assets/12 (2).png';
import image13 from '../../Assets/13 (2).png';
import image14 from '../../Assets/14 (3).png';
import image15 from '../../Assets/15 (2).png';
import image16 from '../../Assets/16 (3).png';
import image17 from '../../Assets/17 (3).png';
import image18 from '../../Assets/18 (3).png';
import image19 from '../../Assets/19 (2).png';

const Core = () => {
  // Array containing team member information
  const teamMembers = [
    { name: "Megha Beria", role: "CP", image: image1 },
    { name: "Uday Badola", role: "Podcast", image: image2 },
    { name: "Ruhani", role: "Design", image: image3 },
    { name: "Yajushreshtha Shukla", role: "CP", image: image4 },
    { name: "Sumedh Dongre", role: "Flutter", image: image5 },
    { name: "Siddharth Prabhakar", role: "Andriod", image: image6 },
    { name: "Chahak Sengar", role: "Cloud", image: image7 },
    { name: "Yash Parkhi", role: "Game Dev", image: image8 },
    { name: "Tawishi Gupta", role: "Design", image: image9 },
    { name: "Ria Vinod", role: "Events", image: image10 },
    { name: "Prachi Lal", role: "Lead", image: image11 },
    { name: "Dhwani Parekh", role: "AI", image: image12 },
    { name: "Ananya Vashisht", role: "Non-tech Lead", image: image13 },
    { name: "Shardul Kacheria", role: "Podcast", image: image14 },
    { name: "Divyansh Kumar", role: "CP", image: image15 },
    { name: "Srishti Tripathi", role: "Podcast", image: image16 },
    { name: "Dev Bhanushali", role: "Flutter", image: image17 },
    { name: "Gautam Ranjhas", role: "Cloud", image: image18 },
    { name: "Smriti Sinha", role: "AI", image: image19 }
  ];

  return (
    <div className="core-container" style={{ backgroundColor: 'white' }}>
      <h1>Core Team</h1>
      <div className="image-grid">
        {teamMembers.map((member, index) => (
          <div className="image-container" key={index}>
            <img src={member.image} alt={member.name} />
            <div className="image-description">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Core;


