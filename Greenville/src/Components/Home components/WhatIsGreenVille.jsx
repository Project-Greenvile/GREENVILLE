
import { motion } from "framer-motion";
import sustainable from "../../assets/images/sustainable.png";

export default function WhatIsGreenville() {
  const floatTransition = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 4, // 3–5 seconds range
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      className="whatIsGreenville"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left Side: Heading, Text, and Button */}
      <div className="textContent">
        <h1 className="textContainerHeader">
          Experience Waste Disposal Services Like Never before
        </h1>
        <p className="whatIsGreenvilleDesc">
          Greenville is an innovative waste management app designed to transform
          the way Lagos tackles waste disposal. Our mission is to create a
          cleaner, healthier, and more sustainable Lagos.
        </p>
        <button className="learnMore">Learn More</button>
      </div>

      {/* Right Side: Image */}
      <div className="sustainableContainer">
        <motion.img
          src={sustainable}
          alt="sustainable solutions"
          className="sustainableIcon"
          animate={floatTransition}
        />
      </div>
    </motion.div>
  );
}

