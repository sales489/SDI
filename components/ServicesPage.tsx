import React from 'react';

const servicesData = [
  {
  title: 'GOOGLE 360 VIRTUAL TOURS',
description: 'We go above and beyond to bring your business to life with a fully interactive 360° virtual walkthrough. This comprehensive service includes high-quality panoramic capture and full interior mapping of your premises, featuring clickable hotspots for enhanced engagement. By integrating the tour directly into Google Maps and your Google Business Profile, we ensure maximum visibility, effectively boosting customer trust and enticing them to visit in person.',  imageUrl: '/Images/page2-1.png', // <-- MODIFIED to use the local static asset
  special: false,
},
{
  title: 'HD PICS & VIDEOS',
description: 'We go above and beyond to provide premium-quality visuals that enhance your entire Google presence. Our service includes professional interior and exterior photography, detailed product shots, and authentic team and service photos, all delivered as optimized images designed to boost your search engine ranking and visibility.',  imageUrl: '/Images/pages2-2.png', // <-- MODIFIED to use the local static asset
  special: false,
},
{
  title: 'QR CODES ',
description: 'We go above and beyond to provide custom-designed QR codes specifically tailored to boost customer engagement. This service delivers branded QR code designs for various needs, including Review, Location, Menu/Service access, and direct links to your Website or WhatsApp, ensuring instant customer interaction and brand consistency.',  imageUrl: '/Images/page2-3.png', // <-- MODIFIED to use the local static asset
  special: false,
},
{
  title: 'Review Replies',
description: 'We go above and beyond to build customer trust and significantly improve your Google rating through timely, professional review responses. Our service includes instant replies for positive feedback, professional handling of negative reviews, custom reply templates aligned with your brand tone, and optional AI-powered personalized responses, coupled with continuous monitoring and monthly performance reports.',  imageUrl: '/Images/pages2-4.png', // <-- MODIFIED to use the local static asset
  special: false,
},
{
  title: 'Google Ads Setup (Local Campaigns)',
description: 'We go above and beyond to generate more calls, enquiries, and store visits using optimized local advertising campaigns. Our service includes in-depth local keyword research, competitor analysis, ad setup across Google Search and Maps, daily budget optimization, robust lead tracking and conversion reporting, and comprehensive monthly performance insights.',  imageUrl: '/Images/page2-5.png', // <-- MODIFIED to use the local static asset
  special: false,
},
{
  title: 'Weekly Google Posts	',
description: 'We go above and beyond to keep your profile active and boost its ranking with a consistent posting schedule. Our service includes weekly promotional posts, timely offers, product highlights, and service updates, alongside festive and special-day content. All posts feature SEO-optimized captions and come with continuous engagement and reach monitoring.',  imageUrl: '/Images/page2-6.png', // <-- MODIFIED to use the local static asset
  special: false,
},

];

// The Services Page component showcases the company's offerings.
function ServicesPage() {
  return (
    <div className="container page-container">
      <div id="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image-container">
                <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="service-image"
                />
                {service.special && (
                    <div className="special-overlay">
                        <div className="virtual-tour-badge">
                            <p className="tour-title">360°</p>
                            <p className="tour-subtitle">VIRTUAL TOUR</p>
                        </div>
                    </div>
                )}
            </div>
            <h3>{service.title}</h3>
            <p>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;