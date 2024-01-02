import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import { useCallback, useMemo,  } from "react";


const Design = (props) => {

  const options = useMemo(() => {
    
    return {
      background: {
        color: "transparent", // this sets a background color for the canvas
      },
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
      },
      interactivity: {
        events: {
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 200, // maximum distance for linking the particles
        },
        number: {
          value:  60,
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 1, max: 1.5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 1, max: 5 }, // let's randomize the particles size a bit
        },
        color: {
          value: "#1111111", // Set the color to black
        },
      },
    };
  }, []);

  
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    
  }, []);




  return (<Particles id={props.id} init={particlesInit} options={options} />);
};

export default Design;