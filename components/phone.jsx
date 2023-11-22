"use client";
import React, { useRef } from "react";
import headPic from '/public/images/headPic.png';
import Circle from './Circle';

const Phone = (index) => {

  const background = {
    width: '35%',
    height: '85%',
    minWidth: '30%',
    borderRadius: '10% 10% 0 0',
    background: 'linear-gradient(to bottom, #2e2e2e, #9c9c9c)',
    overflow: 'hidden',
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const title = {
    fontSize: '5vw',
    zIndex:'5'
  };

  const Button = {
    background: 'linear-gradient(to bottom, #dfc700, #d0bb00)',
    width: '50%',
    height: '8%',
    color: 'black',
    borderRadius: '50px',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:'5'
  };

  const Text = {
    paddingBottom: '1vw',
    zIndex:'5'
  };

  return (
    
    <div style={background}>
    <Circle color="purple" opacity={1} top={20} left={0} width={10} height={10} zIndex={-6} style={{ filter: 'blur(5px)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    <Circle color="#6f74ff" opacity={1} top={50} left={300}  width={30} height={30} zIndex={-6} style={{ filter: 'blur(5px)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    <img
      src={headPic}
      alt="img"
      style={{ maxWidth: '100%', marginBottom: '20px', borderRadius: '8px', zIndex: '4' }}
    />
        <h1 style={title}>
          Persona<span style={{ color: '#ff52f8' }}>NET</span>
        </h1>
        <h2 style={Text}>
          Express, Connect, Thrive | Unleashes Your <br /> Digital Persona for Limitless Connections!
        </h2>
        <button style={Button}>Sign Up</button>
       
    </div>

  );
};

export default Phone;