import React, { useEffect } from 'react';
import './SnapScroll.css'; // Import your CSS file for styling

const SnapScrollComponent = () => {
  useEffect(() => {
    // Add a class to sections when they come into the viewport
    const sections = document.querySelectorAll('.snap-scroll-section');

    const handleScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check..

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

      <div className="snap-scroll-container" style={{padding:35,}}>
        <div className="snap-scroll-section">
          <h2 className='h2 text-center'>Engage Like Never Before</h2>
          <p className='text-center'>
            Imagine your readers not just passively consuming news but actively engaging with it through multiple personas.
            PersonaNet's unique platform allows users to create diverse personas, each reflecting different facets of their interests.
            This feature isn't just innovative; it's a gateway to deeper, more meaningful interactions with your content.
          </p>
        </div>

        <div className="snap-scroll-section">
          <h2 className='h2 text-center'>Community-Centric Discussions</h2>
          <p className='text-center'>
            Your community is diverse, and their viewpoints are invaluable. PersonaNet offers a space where readers can engage in simulated conversations,
            seeing different viewpoints on the latest news, fostering a sense of belonging and a deeper connection to your content.
          </p>
        </div>

        <div className="snap-scroll-section">
          <h2 className='h2 text-center'>Tailored Content Experiences</h2>
          
          <p className='text-center'>
            Each reader is unique, and their news feed should be too. With PersonaNet, your readers' personas receive news and opinions that match their interests,
            creating a highly personalized and relevant experience. This isn’t just news; it’s news that speaks directly to them.
          </p>
        </div>

        <div className="snap-scroll-section">
          <h2 className='h2 text-center'>Boosted Engagement and Revenue</h2>
          <p className='text-center'>
            More engagement means more opportunities. PersonaNet's persona chatting and automated networking keep readers on your site longer,
            leading to increased user retention.
          </p>
        </div>

        <div className="snap-scroll-section">
          <h2 className='h2 text-center'>Be a Pioneer in News Interaction</h2>
          <p className='text-center'>
            Integrating PersonaNet isn’t just adopting a new feature; it's leading the charge in a new era of news interaction.
            Be the first to offer your readers a platform where they can not only read but engage, discuss, and connect with news in a way never before possible.
          </p>
        </div>
      </div>
    
  );
};

export default SnapScrollComponent;

