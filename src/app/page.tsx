"use client";
import React, { useState } from 'react';
import { Page } from '../../types';

// 2. To reach components (e.g., Header.tsx)
//    From 'src/app/page.tsx' -> go up two directories (../../) -> then go into 'components'
import Header from '../../components/Header';
import HomePage from '../../components/HomePage';
import ServicesPage from '../../components/ServicesPage';
import CollaborationPage from '../../components/CollaborationPage';
import Footer from '../../components/Footer';

// The main App component serves as the root of our application's UI.
// It uses state to manage which "page" is currently displayed, simulating
// a multi-page website within a single-page application architecture.
function App() {
  // 'currentPage' state determines which view is rendered. It defaults to the Home page.
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  // 'renderPage' is a helper function to conditionally render the correct page component
  // based on the current value of the 'currentPage' state. This is the core of our
  // client-side routing simulation.
  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage />;
      case Page.Services:
        return <ServicesPage />;
      case Page.Collaboration:
        return <CollaborationPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      {/* The Header component is always visible and contains the navigation logic.
          It receives the current page and a function to update it. */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* The main content area where the currently active page is rendered. */}
      <main>
        {renderPage()}
      </main>
      
      {/* The Footer component is always visible at the bottom of the page. */}
      <Footer />
    </div>
  );
}

export default App;