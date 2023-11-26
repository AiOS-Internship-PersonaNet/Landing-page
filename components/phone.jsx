"use client";
import React, { useRef } from "react";
import Circle from './Circle';

const Phone = (index) => {
  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '80%',
    height: '50%',
    maxWidth: '500px', // Set a fixed width for the phone container
  };

  const background = {
    width: '35%',
    height: '90%',
    borderRadius: '10% 10% 0 0',
    background: 'linear-gradient(to bottom, #222222, #4A4A4A)',
    overflow: 'hidden',
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: '0px',
  };
  

  const title = {
    fontSize: '5vw',
    zIndex: '3',
    marginTop:'-10%'
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
    zIndex: '1',
    marginTop: '10px',
  };

  const Text = {
    paddingBottom: '1vw',
    zIndex: '1',
    marginTop: '-10px',
    fontSize: '1vw',
  };

  const overlay = {
    position: 'absolute',
    width: '95%',
    height: '8%',
    background: 'linear-gradient(to bottom, transparent, black)',
    borderRadius: '8px',
    zIndex: '3',
    bottom: '0%',
  };

  const circle = {
    filter: 'blur(50px)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '-6',
  };

  return (
    <div style={background}>
      <Circle color="#FF00EC" opacity={1} top={20} left={0} width={'5px'} height={5} style={circle} />
      <Circle color="#0008FF" opacity={1} top={50} left={300} width={30} height={30} style={circle} />

      <div style={containerStyle}>
        <img
          src={'/images/headPic.png'}
          alt="img"
          style={{ display: 'flex', width: '95%', alignItems: 'center', maxWidth: '100%', borderRadius: '8px', zIndex: '1', height: '100%' }}
        />

        <div style={overlay}></div>
      </div>

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
