import React from 'react';
import './Events.css';
import ai from '../../Assets/ai.jpeg';
import gamedev from '../../Assets/gamedev.png';


const Event = () => {
  return (
    <div className="background-container">
    <div className="animated-background"></div>
    <div className="container" style={{ backgroundColor: 'white', width: '100%', margin: '0 auto' }}>
      <div className="page-header" style={{ textAlign: 'center' }}>
      
      </div>
      <ul className="timeline">
        <li>
          
          <div className="timeline-badge"><i className="glyphicon glyphicon-check" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title" style={{color: '#999999'}}>Flutter Workshop</h4>
              <p><small className="text-muted"><i className="glyphicon glyphicon-time" /> 11th August, 2023</small></p>
            </div>
            <div className="timeline-body">
              <p>The Flutter Workshop event proved to be a resounding success, offering participants an enriching experience delving into the realm of Flutter – a widely-used open-source UI software development toolkit developed by Google. The workshop covered a spectrum of Flutter-related topics, spanning fundamental concepts to hands-on practice in altering a sample Flutter app.</p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-badge warning"><i className="glyphicon glyphicon-credit-card" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title" style={{color: '#f0ad4e'}}>Intro to Game Dev</h4>
            </div>
            <div className="timeline-body">
              <p><small className="text-muted"><i className="glyphicon glyphicon-time" /> 19th August, 2023</small></p>
              <p>The dynamic workshop, was unfolded with the goal of immersing participants in the exhilarating realm of game creation. This session aimed to equip attendees with hands-on experience using prominent game development tools like Pygame, Piskell, and SFXR. Despite a brief initial setback, the workshop encapsulated a journey into the fundamentals of game development, fostering creativity in sprite design and 8-bit audio generation.</p>
              <img src={gamedev} alt="Game Devlopment" style={{ width: '540px', height: '300px' }} />
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge danger"><i className="glyphicon glyphicon-credit-card" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title" style={{color: '#d9534f'}}>Intro to Game Dev (Cont.)</h4>
            </div>
            <div className="timeline-body">
              <p><small className="text-muted"><i className="glyphicon glyphicon-time" /> 9th September, 2023</small></p>
              <p>GDSC Game Dev orchestrated an impactful workshop titled "Customizing the Dino Game with Pygame, Sfxr, and Piskel." This event aimed to immerse participants in the world of game development using Python, exploring the intricacies of Pygame, Sfxr for sound effects, and Piskel for asset customization. The dynamic session brought together over 25 eager participants, creating a vibrant and collaborative learning environment.</p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title" style={{color: '#adc0c5'}}>Intro to Open-Source </h4>
            </div>
            <div className="timeline-body">
              <p><small className="text-muted"><i className="glyphicon glyphicon-time" />  6th October, 2023</small></p>
              <p>The Open-Source Workshop, a collaborative effort by the Symbiosis Open-Source Society and Google Developer Student Clubs (GDSC), aimed to champion open-source software development and equip participants with essential knowledge and skills in this field. The workshop garnered an enthusiastic response from students and technology enthusiasts.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge info"><i className="glyphicon glyphicon-floppy-disk" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title" style={{color: '#5bc0de'}}>AI In HealthCare</h4>
             
            </div>
            <div className="timeline-body">
              <p><small className="text-muted"><i className="glyphicon glyphicon-time" />  20th -21st October, 2023</small></p>
              <p>The Google Developer Student Clubs (GDSC) organized "The AI in Healthcare Workshop: from Python Basics to Neural Networks" with the goal of catering to a diverse audience. The workshop welcomed beginners without prior knowledge of AI/ML or DL, as well as individuals seeking to reinforce their fundamentals and explore the fascinating realm of AI in the healthcare domain. The event garnered an overwhelming response from students and technology enthusiasts.</p>         
              <img src={ai} alt="AI In HealthCare" style={{ width: '540px', height: '300px' }} />
            </div>
          </div>
        </li>
        
        <li>
          <div className="timeline-panel">
            <div className="timeline-heading">
            <h4 className="timeline-title" style={{color: '#5bc0de'}}>Event Highlights</h4>
            </div>
            <div className="timeline-body">
              <p>The AI in Healthcare Workshop at GDSC SIT provided a comprehensive dive into Python basics, data handling, and ML/DL applications in healthcare. Keynote speeches and technical sessions by experts and students enriched the learning experience, fostering interaction and practical learning. Participants gained valuable insights and hands-on experience, solidifying their understanding of AI's role in the healthcare domain.</p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-badge success"><i className="glyphicon glyphicon-thumbs-up" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title" style={{color: '#3f903f'}}>Intro to Google’s WE program</h4>
            </div>
            <div className="timeline-body">
              <p><small className="text-muted"><i className="glyphicon glyphicon-time" />  25th January, 2024</small></p>
              <p>Women Engineers (WE), a 24-month immersive and LIVE online learning experiential program offered by Talent Sprint and supported by Google, selects, trains, and nurtures deserving first-year women engineering students to become world-class software engineers. A 100% scholarship that covers the complete program fee along with a rewarding cash scholarship are offered to the selected participants.</p>
            </div>
          </div>
        </li>
      </ul>
      </div>
      </div>
      
  
  );
};

export default Event;
