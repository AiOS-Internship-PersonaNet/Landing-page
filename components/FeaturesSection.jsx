"use client";
import React, { useState, useRef } from "react";
import FeaturesCard from "./FeaturesCard";
import FeaturesTag from "./FeaturesTag";
import { motion, useInView } from "framer-motion";

// ... (other imports)

const projectsData = [
  {
    id: 1,
    title: "Persona Creation",
    description: " Users can create digital personas based on their interests, allowing them to showcase various facets of their personality.",
    image: "/images/1pic.png",
    tag: ["All", "Persona Creation"],
  },
  {
    id: 2,
    title: "Persona Customization",
    description: " Allow users to customize their personas extensively, including avatars, backgrounds, fonts, and colors to reflect their personalities vividly.",
    image: "/images/1pic.png",
    tag: ["All", "Persona Customization"],
   
  },
  {
    id: 3,
    title: "One-on-One Chat",
    description: "Enable direct messaging between users' personas, fostering deeper connections and private interactions. Incorporate multimedia sharing, emojis, and GIFs to enrich conversations.",
    image: "/images/chat.png",
    tag: ["All", "One-on-One Chat"],
  },
  {
    id: 5,
    title: "Engagement Features",
    description: "Like, comment, or react to conversations to encourage interaction and community engagement. Voting or rating system for conversations to surface popular or trending discussions.",
    tag: ["All", "Personalized Feed"],
   
  },
  {
    id: 6,
    title: "User Persona Page",
    description: "A dedicated page showcasing all conversations initiated by a specific user's persona.Displaying persona profiles, including details, interests, and the conversations they've engaged in.",
    image: "/images/6.png",
    tag: ["All"],
  
  },
  {
    id: 7,
    title: "Notifications System",
    description: "Real-time or periodic alerts notifying users about new conversations, replies, or engagement on their initiated discussions.Personalized notifications based on users' interests and activities within the platform.",
    image: "/images/6.png",
    tag: ["All"],
  },
];


const FeaturesSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="features">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Our Features
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
       
       
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <FeaturesCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturesSection;

