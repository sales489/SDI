import React from 'react';
import Image from 'next/image'; 

// The Collaboration Page component provides insight into the company's ethos and contact details.
function CollaborationPage() {
  return (
    <div className="container page-container">
      <div className="collaboration-content">
      <Image
        src="/Images/page3.png" // Path: /public/Images/page3.png
        alt="A descriptive alternative text for page1"
        width={500} 
        height={500} 
        className="hero-image"
      />
        
        <div className="collaboration-text">
          {/* ... (Omitted content for brevity) ... */}
          
          <div>
            <h2>Our Goals at SDI Solutions: <span className="highlight">Unleashing the Power of Imagination</span></h2>
            {/* ... (Omitted content for brevity) ... */}
          </div>

          <div>
            <h2>Our Aim: <span className="highlight">Fueling Fun, Inspiring Innovation</span></h2>
            {/* ... (Omitted content for brevity) ... */}
          </div>

          <div>
            <h2>Our Goal: <span className="highlight">Crafting Tomorrow's Wonders Today</span></h2>
            {/* ... (Omitted content for brevity) ... */}
          </div>
          
           <p>
            So, whether you're an individual seeking a spark of inspiration or a business ready to embark on a transformative journey, join us in this exhilarating adventure. Together, let's unleash our imagination, fuel our passion, and create a future that surpasses our wildest dreams. Get ready to embark on an extraordinary voyage with SDI Solutions, where innovation meets limitless fun!
          </p>
        </div>
      </div>
      
      {/* Contact and Location Section */}
      <div className="contact-section">
        <div>
          {/* 🔥 FIX: Using Next.js Image component with the ROOT-RELATIVE path.
             This looks for the file at: /public/Images/address.png */}
          <Image 
            src="/Images/address.jpg" 
            alt="Google Map Location of SDI Solutions" 
            width={500} 
            height={300} // Ensure you provide a reasonable height
            className="hero-image" 
          />
        </div>
        <div className="contact-info">
          <h3>Address:</h3>
          <p>
            Second floor ,4-975 Kothur,Perandapalli, Hosur, Tamilnadu 635109
          </p>
          <h3>Contact us:</h3>
          <p>
            <a href="mailto:sales@sdisolutions.in">sales@sdisolutions.in</a><br/>
            <a href="mailto:support@sdisolutions.in">support@sdisolutions.in</a>
          </p>

          <h3>Ph no:</h3>
          <p>9994576623</p>
        </div>
      </div>

      {/* Social Media Icon */}
      <div className="social-media-section">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.8-11.2c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default CollaborationPage;