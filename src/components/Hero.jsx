import { motion } from "framer-motion";
import { useEffect, useState } from "react"; // Ensure this import is present
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Define media queries for the specified conditions
    const queries = [
      window.matchMedia(
        "(min-width: 501px) and (max-width: 1120px) and (max-height: 768px)"
      ),
      window.matchMedia(
        "(min-width: 392px) and (max-width: 1120px) and (max-height: 614px)"
      ),
      window.matchMedia("(width: 1024px) and (height: 600px)"),
    ];

    const checkScreenSize = () => {
      // If any query matches, set isSmallScreen to true
      setIsSmallScreen(queries.some((query) => query.matches));
    };

    checkScreenSize(); // Initial check

    // Add listeners to each query
    queries.forEach((query) =>
      query.addEventListener("change", checkScreenSize)
    );

    return () => {
      // Clean up listeners
      queries.forEach((query) =>
        query.removeEventListener("change", checkScreenSize)
      );
    };
  }, []);

  return isSmallScreen;
};
const Hero = () => {
  const isSmallScreen = useScreenSize();

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]"> Abed El Rahman</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            I create responsive interfaces and scalable <br /> backend systems
            for full-stack web applications.
          </p>
        </div>
      </div>

      {/* Conditional Rendering */}
      {!isSmallScreen && <ComputersCanvas />}
      {!isSmallScreen && (
        <div className="absolute xs:bottom-10 bottom-32 md:bottom-20 lg:bottom-28 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary"
              />
            </div>
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;
