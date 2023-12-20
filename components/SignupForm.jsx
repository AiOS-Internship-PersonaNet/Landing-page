"use client";
import React, { useEffect } from 'react';

const SignupForm = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.defer = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.body.removeChild(script);
    }
  }, []); 

  const signUp = {
    background: 'white'
  }

  return (
    <div id='signUp' className="elfsight-app-a26e6c29-beb2-493b-bd03-24cde9c8bfdf" style={signUp} data-elfsight-app-lazy></div>
  );
};

export default SignupForm;
