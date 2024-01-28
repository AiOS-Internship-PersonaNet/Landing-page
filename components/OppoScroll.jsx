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
            zIndex:4,
            alignItems: "center",
            justifyContent:'center',
          }}
        ></motion.div>
      </div>

      
      <div className="flex items-center">
        <div>
        <p className="font-bold text-xl md:text-2xl text-white my-8 md:my-8" style={{fontSize:30}}>
            Transform Your News Engagement with PersonaNet!
          </p>
          <p className="text-base md:text-lg text-white my-4 md:my-6">
          In the fast-paced world of news, the challenge isn't just about delivering content; it's about creating an interactive and dynamic experience that resonates with your readers. That's where PersonaNet steps in, revolutionizing the way your audience engages with news.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OppScroll;