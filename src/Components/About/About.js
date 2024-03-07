import React from 'react';
import Lottie from 'react-lottie';
import './About.css';

import animationData from '../../Assets/heroleft.json';

const About = () => {

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row-reverse', marginBottom: '-20px' }}> {/* Added marginBottom */}
        <div style={{ width: '50%' }}>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }}
            height={400}
            width={400}
          />
        </div>
        <div className="flex items-center mb-4">
          <div className="text-4xl text-gray-500 font-medium mr-2 md:text-5xl" style={{ color: '#757575' }}><h1>ABOUT</h1></div>
          <img alt="facebook" src="https://cdn-icons-png.flaticon.com/512/7350/7350737.png" width="42" height="42" />
          <p>Our Developer Student Clubs at Symbiosis Institute of Technology, Pune stand out for our inclusive approach to skill development, diverse learning opportunities spanning from mobile and web development to machine learning and cloud computing, emphasis on real-world problem-solving, open and supportive community culture welcoming students of all levels, and strong industry connections providing valuable networking and insights.</p>
        </div>
        
      </div>
    
  
  
    </div>
  );
};

export default About;



