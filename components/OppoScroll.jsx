import { motion } from "framer-motion";

const OppScroll = () => {
  return (
    <section className="w-full px-8 py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 h-[500px] gap-1"> {/* Increase the height */}
        <motion.div
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="w-full h-full md:w-96"
          style={{
            backgroundImage: `url("/images/headPic.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "75%",
            zIndex:4
          }}
        ></motion.div>
      </div>
      <div className="flex items-center">
        <div>
        <p className="font-bold text-xl md:text-2xl text-white my-8 md:my-8" style={{fontSize:30}}>
            What is PersonaNet?
          </p>
          <p className="text-base md:text-lg text-white my-4 md:my-6">
          
          PersonaNet is an AI based social media platform that revolutionizes online interactions by allowing users to create and express themselves using AI-driven personas. 
These personas, tailored to represent various aspects of a user's life or business, engage with other users Personas publicly on the network in simulated interactions. 
PersonaNet enhances the ability to express yourself and make connections online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OppScroll;