import type { Metadata } from 'next';
import '../../globals.css'; // <-- Corrected path to the project root
export const metadata: Metadata = {
  title: 'Rohit Portfolio - Web Developer',
  description: 'A portfolio showcasing my skills and projects in web development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The Root Layout must include the <html> and <body> tags
    <html lang="en">
      {/* You can add global body classes here, e.g., for Tailwind CSS fonts or styling.
        The 'antialiased' class is a common example for better font rendering. 
      */}
      <body className="antialiased">
        {/* Add global components here if desired, but for a typical portfolio, 
          you might put Header/Footer inside page.tsx or another layout level 
          if they need specific data or logic.
          
          If you want Header/Footer on ALL pages, you'd place them here:
        */}
        
        {/* Example of where you would place your components: */}
        {/* <Header /> */}
        
        <main>
            {/* The children prop is where your page content (e.g., src/app/page.tsx) gets rendered */}
            {children}
        </main>

        {/* <Footer /> */}
        
      </body>
    </html>
  );
}