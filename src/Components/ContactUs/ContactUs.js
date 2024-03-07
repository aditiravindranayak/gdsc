import React from 'react';
import brackets from '../../Assets/brackets.png';

const ContactUs = () => {
  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,600&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />
        <section>
          <div className="container">
            <div className="contactInfo">
              <div>
                <h2>Contact Info</h2>
                <ul className="info">
                  <li>
                    <span><img alt="location" src="https://cdn-icons-png.flaticon.com/128/819/819865.png" /></span>
                    <span>Symbiosis Institute<br />
                      of Technology,<br />
                      Pune</span>
                  </li>
                  <li>
                    <span><img alt="mail" src="https://cdn-icons-png.flaticon.com/128/646/646135.png" /></span>
                    <span>gdsc@sitpune.edu.in</span>
                  </li>
                  <li>
                    <span><img alt="call" src="https://cdn-icons-png.flaticon.com/128/2593/2593488.png" /></span>
                    <span>310-286-1623</span>
                  </li>
                </ul>
              </div>
              <ul className="sci">
                <li><a href="https://www.sitpune.edu.in/student-club"><img alt="facebook" src="https://www.bing.com/th?id=OIP.fiV5ITXkzYXqPmlyF2MI0wHaHa&pid=3.1&cb=&w=300&h=300&p=0" width="32" height="32" /></a></li>
                <li><a href="https://gdsc.community.dev/symbiosis-institute-of-technology-pune/"><img src={brackets} alt="brackets" style={{ width: '32px', height: '32px' }} /></a></li>
                <li><a href="https://www.instagram.com/gdsc_sit/"><img alt="instagram" src="https://cdn-icons-png.flaticon.com/128/13266/13266180.png" width="32" height="32" /></a></li>
                <li><a href="https://developers.google.com/community-guidelines"><img alt="guidelines" src="https://cdn-icons-png.flaticon.com/128/10568/10568107.png" width="32" height="32" /></a></li>
                <li><a href="https://www.linkedin.com/company/gdsc-sit-pune/mycompany/"><img alt="linkedin" src="https://cdn-icons-png.flaticon.com/128/13670/13670384.png" width="32" height="32" /></a></li>
              </ul>
            </div>
            <div className="contactForm">
              <h2>Send a Message</h2>
              <div className="formBox">
                <div className="inputBox w50">
                  <input type="text" required placeholder=" " />
                  <span>First Name</span>
                </div>
                <div className="inputBox w50">
                  <input type="text" required placeholder=" " />
                  <span>Last Name</span>
                </div>
                <div className="inputBox w50">
                  <input type="email" required placeholder=" " />
                  <span>Email Address</span>
                </div>
                <div className="inputBox w50">
                  <input type="text" required placeholder=" " />
                  <span>Mobile Number</span>
                </div>
                <div className="inputBox w100">
                  <textarea required defaultValue={""} />
                  <span>Write your message here...</span>
                </div>
                <div className="inputBox w100">
                  <input type="submit" defaultValue="Send" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
