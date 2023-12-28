import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const OppoScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <section ref={targetRef} className="flex bg-black text-white">
      <Images content={items} scrollYProgress={scrollYProgress} />
      <Content content={items} />
    </section>
  );
};

const Content = ({ content }) => {
  return (
    <div className="w-full flex flex-col justify-center items-end">
      {content.map(({ id, title, description }, idx) => (
        <div
          key={id}
          className={`p-8 h-screen flex flex-col justify-center items-end ${
            idx % 2 ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <h3 className="text-3xl font-medium">{title}</h3>
          <p className="font-light w-full max-w-md">{description}</p>
        </div>
      ))}
    </div>
  );
};

const Images = ({ content, scrollYProgress }) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"]
  );

  return (
    <div className="h-screen overflow-hidden sticky top-0 w-24 md:w-full">
      <motion.div style={{ top }} className="absolute left-0 right-0">
        {[...content].reverse().map(({ img, id, title }) => (
          <img
            key={id}
            alt={title}
            className="h-screen w-full object-cover"
            src={img}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OppoScroll;

const items = [
    {
      id: 1,
      
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      img: "/images/headPic.png" // Corrected img source assignment
    }
  ];
  
