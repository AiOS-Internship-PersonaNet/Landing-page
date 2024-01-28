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
           transition: { duration: 3, delay: index * 0.5 },
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
           transition: { duration: 3, delay: index * 0.5 },
         });
       });
     }
   }, [bottomControlsArray, bottomInView]);
 
  return (
    <div  className="main-container" style={{ display: 'flex', flexDirection: 'column',  }}>
      {/* Right Image */}
      <section class='child'>
        <motion.div
          ref={topRef}
          className="imageLeft"
          style={{ marginBottom: 20 }}
          initial={{ opacity: 0, y: 20 }}
          animate={topControlsArray[0]}
        >
          <motion.div className='limage' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.img  src={'/images/artificial-intelligence.png'}  alt="Left Image" style={{ width: 'auto', height: '50%', }} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}/>
          </motion.div>

          <div className={`rightText`} initial={{ opacity: 0, y: 20 }} animate={topControlsArray[1]}>
          <div className='rightText' >
            <div className="TextrightContainer">
              <hr/>
              <h2 className="h2 text-center pt-10">Engage Like Never Before</h2>
              <p className="text-center pb-10">
              Picture your readers not merely passively consuming news but actively participating in it through multiple personas. PersonaNet's distinctive platform empowers 
              users to create diverse personas, each representing various facets of their interests. This innovative feature serves as a gateway to deeper, more meaningful 
              interactions with your content. Community-Centric Discussions: Recognizing the diversity within your community, PersonaNet provides a space where readers can 
              engage in simulated conversations, encountering different viewpoints on the latest news. This fosters a sense of belonging and a deeper connection to your content 
              as users actively participate in discussions, enhancing the overall community experience.
              </p>
              <hr /> 
            </div>
          </div>
          </div>
        </motion.div>
      </section>

      {/* Left Image */}
      <section class='child'>
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
                More engagement means more opportunities, and PersonaNet facilitates this through persona chatting and automated networking, ensuring that readers stay on your 
                site longer, ultimately leading to increased user retention. The platform also offers tailored content experiences by recognizing each reader's unique persona, 
                delivering news and opinions that align with their interests. This personalized approach creates a highly relevant and engaging news feed. By integrating PersonaNet,
                you not only adopt a new feature but become a pioneer in news interaction, leading the charge in a new era where readers can actively engage, discuss, and connect with news in unprecedented ways, 
                setting your platform apart as the first to offer such a dynamic and interactive news experience.
                </p>
                <hr /> 
              </div>

            
            </div>

          
          </motion.div>

          <motion.div className='rimage'>
            <motion.img src={'/images/ai.jpg'}  alt="Left Image" style={{ width: 'auto', height: '50%', }} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}/>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default SnapScrollComponent;
