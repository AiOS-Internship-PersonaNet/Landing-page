import { motion } from "framer-motion";

const OppScroll = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 h-[600px] gap-1"> {/* Increase the height */}
        <motion.div
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="w-full h-full md:w-96"
          style={{
            backgroundImage: `url("/images/headPic.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        ></motion.div>
      </div>
      <div className="flex items-center">
        <div>
          <p className="text-base md:text-lg text-white my-4 md:my-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis
            in error repellat voluptatibus ad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OppScroll;
