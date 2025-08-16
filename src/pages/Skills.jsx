import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// components
import { useTheme } from "../context/ThemeProvider";

const skills = [
  { name: "HTML5", color: "bg-orange-500", icon: <FaHtml5 size={ 40 } /> },
  { name: "CSS3", color: "bg-blue-500", icon: <FaCss3Alt size={ 40 } /> },
  { name: "JavaScript", color: "bg-yellow-400", icon: <FaJsSquare size={ 40 } /> },
  { name: "React", color: "bg-sky-400", icon: <FaReact size={ 40 } /> },
  { name: "Node.js", color: "bg-green-500", icon: <FaNodeJs size={ 40 } /> },
  { name: "MongoDB", color: "bg-green-700", icon: <SiMongodb size={ 40 } /> },
];

const Skills = () => {

  const { theme } = useTheme();

  const { ref, inView } = useInView( {
    triggerOnce: false,
    threshold: 0.3,
  } );

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: ( i ) => ( {
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    } ),
  };

  return (
    <section
      id="skills"
      ref={ ref }
      className={ `py-16 px-6 md:px-16 transition-colors duration-500
        ${ theme === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-base-100 text-gray-900"
        }` }
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold inline-block relative pb-2 dark:text-white">
          My Skills
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
        </h2>
        {/* <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                    Drop me a line or visit my office in Sylhet.
                    Typically respond within 24 hours during work days.
                </p> */}
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        { skills.map( ( skill, index ) => (
          <motion.div
            key={ skill.name }
            className="relative w-40 h-20 rounded-lg shadow-md overflow-hidden transform hover:scale-105"
            variants={ cardVariants }
            initial="hidden"
            animate={ inView ? "visible" : "hidden" }
            custom={ index }
          >
            <div className={ `absolute inset-0 ${ skill.color } opacity-80` }></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full font-semibold text-white text-lg">
              { skill.icon }
              <span className="mt-1">{ skill.name }</span>
            </div>
          </motion.div>
        ) ) }
      </div>
    </section>
  );
};

export default Skills;
