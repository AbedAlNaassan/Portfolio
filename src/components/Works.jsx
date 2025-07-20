// import { Tilt } from "react-tilt";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{ max: 45, scale: 1, speed: 450 }}
//         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
//       >
//         <div className="relative w-full h-[230px]">
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover rounded-2xl"
//           />
//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img
//                 src={github}
//                 alt="github"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mt-5">
//           <h3 className="text-white font-bold text-[24px]">{name}</h3>
//           <p className="mt-2 text-secondary text-[14px]">{description}</p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p key={tag.name} className={`text-[14px] ${tag.color}`}>
//               {tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>My Work</p>
//         <h2 className={styles.sectionHeadText}>Projects</h2>
//       </motion.div>

//       <div className="w-full flex flex-col">
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
//         >
//           Here are some of the projects I’ve worked on, showcasing my skills in
//           creating responsive designs and efficient backend systems. Each
//           project reflects my dedication to solving problems and building
//           functional, user-friendly web applications.
//         </motion.p>

//         <div className="mt-20 flex flex-wrap gap-7">
//           {projects.map((project, index) => (
//             <ProjectCard key={`project-${index}`} index={index} {...project} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "");

import { Tilt } from "react-tilt";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useEffect, useState } from "react";

// Create a motion-aware component that responds to screen size
const ConditionalMotionCard = ({ children, index }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1260);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isLargeScreen ? (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {children}
    </motion.div>
  ) : (
    <div>{children}</div>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1260);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const tiltOptions = {
    max: isLargeScreen ? 45 : 0, // No tilt on small screens
    scale: isLargeScreen ? 1 : 1, // No scale effect
    speed: isLargeScreen ? 450 : 0, // No animation
    glare: isLargeScreen, // No glare on small screens
    "max-glare": isLargeScreen ? 0.5 : 0,
  };

  return (
    <ConditionalMotionCard index={index}>
      <Tilt
        options={tiltOptions}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </ConditionalMotionCard>
  );
};

// Updated Works component with conditional motion
const Works = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1260);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {isLargeScreen ? (
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
        </motion.div>
      ) : (
        <div>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
        </div>
      )}

      <div className="w-full flex flex-col">
        {isLargeScreen ? (
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Here are some of the projects I've worked on...
          </motion.p>
        ) : (
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Here are some of the projects I've worked on...
          </p>
        )}

        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
