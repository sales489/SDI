import React from 'react';
import Image from 'next/image';
// This component represents the Home page content.
function HomePage() {
  return (
    <div className="container page-container">
      <div className="home-content">
        {/* Hero Image */}
        <Image
                src="/Images/page1.png" // The static path from the public folder
                alt="A descriptive alternative text for page1"
                width={500} // Set the actual width of the image
                height={500} // Set the actual height of the image
                className="hero-image"
              />

        {/* Main Heading */}
        <h1>
          <span className="highlight">Your </span>{' '}
          Google Profile{' '}
          <span className="highlight">Is Your </span>{' '}
          First Impression
        </h1>
        
        {/* Introductory Paragraphs */}
        <div className="intro-text">
          <p>
            Customers judge your business based on your photos, reviews, working hours, and the overall quality of your Google listing. This means Google My Business is more than just an online listing; it's a representation of your brand. SDI SOLUTIONS focuses on creating a strong first impression that builds trust, increases visibility, and helps customers connect with your business instantly. A well-optimized profile managed by SDI SOLUTIONS ensures that your business attracts genuine customers consistently.
          </p>
          <p>
              Even a small mistake in your business details can cost you valuable customers. Incorrect phone numbers, outdated working hours, or confusing addresses push people toward your competitors. SDI SOLUTIONS ensures every detail is accurate and updated. When your information is correct, right down to the last meter, it becomes easier for customers to find and trust your business. With clear contact details, proper categorization, and reliable timings, SDI SOLUTIONS helps create a seamless experience for your audience.
        </p>
          <p>
            A 360-degree virtual tour lets customers experience your business online just like they would in person. This kind of transparency builds immediate confidence. Whether you run a restaurant, salon, showroom, gym, or real estate property, a virtual tour gives customers a real feel of the place even before they visit. SDI SOLUTIONS specializes in creating high-quality 360° virtual tours that boost engagement and drive more enquiries. Businesses using tours from SDI SOLUTIONS often see a significant increase in customer interaction.          </p>
          <p>
            Many local businesses create their Google profile once and never maintain it again. They forget to update photos, reply to reviews, or post new content. This inconsistency reduces rankings and visibility. Google rewards businesses that stay active and engage with customers regularly. SDI SOLUTIONS provides continuous updates, weekly posts, review management, and regular improvements that keep your profile performing at its best. With SDI SOLUTIONS, your profile stays active, relevant, and highly visible.          </p>
           <p>
            Google My Business is not just a listing tool; it is a complete digital marketing engine for local businesses. Appearing in the top three positions of local search results can dramatically increase your calls, enquiries, and walk-ins. SDI SOLUTIONS helps businesses stand out in competitive markets by optimizing every part of the profile. This leads to more visibility, a stronger reputation, and long-term credibility. With the right strategy from SDI SOLUTIONS, your business becomes the preferred choice for customers searching in your area.
                      </p>
                      <p>  Customers depend on Google for almost every decision. Your business needs to be visible, active, and trustworthy online. A strong Google My Business profile managed by SDI SOLUTIONS helps you attract more customers and grow faster than ever. When optimized properly, Google My Business becomes your 24/7 marketing engine, bringing consistent results without heavy advertising. With SDI SOLUTIONS by your side, your business is always one step ahead in the digital world.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;