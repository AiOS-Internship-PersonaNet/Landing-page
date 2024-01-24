import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import { useCallback, useMemo,useEffect, useState  } from "react";

const Design = (props) => {
 /* const getParticleOptions = () => {
    const baseOptions = {
      background: {
        color: "transparent",
      },
      fullScreen: {
        enable: true,
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 100,
          },
        },
      },
      particles: {
        links: {
          enable: true,
          distance: 200,
          color: "#cfcfcf",
        },
        number: {
          value: 65,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 1.5 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 5 },
        },
        color: {
          value: "#cfcfcf",
        },
      },
    };

    if (window.innerWidth < 600) {
      // Adjust particle options for smaller screens
      baseOptions.particles.number.value = 10;
      // Add other adjustments as needed
    }

    return baseOptions;
  };

  const [options, setOptions] = useState(() => getParticleOptions());

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setOptions(getParticleOptions());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // empty dependency array means this effect runs only once, similar to componentDidMount

  return <Particles id={props.id} init={particlesInit} options={options} />;*/
};

export default Design;