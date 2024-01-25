import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './snapScroll.css';



const SnapScrollComponent = () => {
 
   // Use separate useInView and controlsArray for the top and bottom sections
   const [topRef, topInView] = useInView({ triggerOnce: true, rootMargin: '-100px 0px' });
   const [bottomRef, bottomInView] = useInView({ triggerOnce: true, rootMargin: '-100px 0px' });
 
   // Initialize controlsArray with useAnimation for the top and bottom sections
   const topControlsArray = Array.from({ length: 2 }, () => useAnimation());
   const bottomControlsArray = Array.from({ length: 2 }, () => useAnimation());
 
   useEffect(() => {
     if (topInView) {
       topControlsArray.forEach((controls, index) => {
         controls.start({
           opacity: 1,
           y: 0,
           transition: { duration: 2, delay: index * 0.5 },
         });
       });
     }
   }, [topControlsArray, topInView]);
 
   useEffect(() => {
     if (bottomInView) {
       bottomControlsArray.forEach((controls, index) => {
         controls.start({
           opacity: 1,
           y: 0,
           transition: { duration: 2, delay: index * 0.5 },
         });
       });
     }
   }, [bottomControlsArray, bottomInView]);
 
  return (
    <div  className="main-container" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Right Image */}
      <motion.div
        ref={topRef}
        className="imageLeft"
        style={{ marginBottom: 20 }}
        initial={{ opacity: 0, y: 20 }}
        animate={topControlsArray[0]}
      >
        <div className='limage' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.img  src={'/images/artificial-intelligence.png'}  alt="Left Image" style={{ width: 'auto', height: '50%', }} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}/>
        </div>

        <motion.div className={`rightText`} initial={{ opacity: 0, y: 20 }} animate={topControlsArray[1]}>
        <div className='rightText' >
          <div className="TextrightContainer">
            <hr/>
            <h2 className="h2 text-center pt-10">Engage Like Never Before</h2>
            <p className="text-center pb-10">
              Imagine your readers not just passively consuming news but actively engaging with it through multiple personas.
              PersonaNet's unique platform allows users to create diverse personas, each reflecting different facets of their interests.
              This feature isn't just innovative; it's a gateway to deeper, more meaningful interactions with your content.
            </p>
            <hr /> 
          </div>


          <div className="TextrightContainer">
            <h2 className="h2 text-center pt-10">Community-Centric Discussions</h2>
            <p className="text-center pb-10">
              Your community is diverse, and their viewpoints are invaluable. PersonaNet offers a space where readers can engage in simulated conversations,
              seeing different viewpoints on the latest news, fostering a sense of belonging and a deeper connection to your content.
            </p>
            <hr /> 
          </div>

          <div className="TextrightContainer">
            <h2 className="h2 text-center pt-10">Tailored Content Experiences</h2>
            <p className="text-center pb-10">
              Each reader is unique, and their news feed should be too. With PersonaNet, your readers' personas receive news and opinions that match their interests,
              creating a highly personalized and relevant experience. This isn’t just news; it’s news that speaks directly to them.
            </p>
            <hr /> 
          </div>
        </div>
        </motion.div>
      </motion.div>

      {/* Left Image */}
      <motion.div
        ref={bottomRef}
        className="imageRight"
        initial={{ opacity: 0, y: 20 }}
        animate={bottomControlsArray[0]}
      >
        <motion.div className={`leftText`} initial={{ opacity: 0, y: 20 }} animate={bottomControlsArray[1]}>
          <div className='leftText'>
            <div className="TextleftContainer">
            <hr /> 
              <h2 className="h2 text-center pt-10">Boosted Engagement and Revenue</h2>
              <p className="text-center pb-10">
                More engagement means more opportunities. PersonaNet's persona chatting and automated networking keep readers on your site longer,
                leading to increased user retention.
              </p>
              <hr /> 
            </div>

            <div className="TextleftContainer">
            <h2 className="h2 text-center pt-10">Tailored Content Experiences</h2>
              <p className="text-center pb-10">
                Each reader is unique, and their news feed should be too. With PersonaNet, your readers' personas receive news and opinions that match their interests,
                creating a highly personalized and relevant experience. This isn’t just news; it’s news that speaks directly to them.
              </p>
              <hr /> 
            </div>

            <div className="TextleftContainer">
            <h2 className="h2 text-center pt-10">Be a Pioneer in News Interaction</h2>
              <p className="text-center pb-10">
                Integrating PersonaNet isn’t just adopting a new feature; it's leading the charge in a new era of news interaction.
                Be the first to offer your readers a platform where they can not only read but engage, discuss, and connect with news in a way never before possible.
              </p>
              <hr /> 
            </div>
          </div>

        
        </motion.div>

        <div className='rimage'>
          
          <motion.img src={'/images/ai.jpg'}  alt="Left Image" style={{ width: 'auto', height: '50%', }} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}/>
        </div>
      </motion.div>
    </div>
  );
};

export default SnapScrollComponent;
