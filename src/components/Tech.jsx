import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useState, useEffect } from "react";

// Function to detect if the device is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1370px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return isMobile;
};

const Tech = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {isMobile ? (
            // If mobile, display the image
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-cover"
            />
          ) : (
            // Otherwise, render the BallCanvas (3D ball)
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
