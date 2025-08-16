// components
import { useTheme } from "../context/ThemeProvider";
import useTitle from "./shared/hooks/UseTite";

const experienceData = [
  {
    role: "Frontend Developer",
    company: "TechNova Solutions",
    duration: "2023 - Present",
    description: "Built responsive UI using React and Tailwind CSS.",
  },
  {
    role: "Intern Developer",
    company: "Webify Labs",
    duration: "2022 - 2023",
    description: "Worked on backend APIs using Node.js and Express.",
  },
];

const Experience = () => {

  useTitle('Experience || My Portfolio')

  const { theme } = useTheme();

  return (
    <section
      id="experience"
      className={ `py-16 px-6 md:px-16 transition-colors duration-500 ${ theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-base-100 text-gray-900" }` }
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold inline-block relative pb-2 dark:text-white">
          Experience
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
        </h2>
      </div>

      <div className="flex justify-center flex-wrap gap-6 px-4 md:px-0">
        { experienceData.map( ( exp, index ) => (
          <div
            key={ index }

            className={ `w-full md:w-1/2 lg:w-1/3 shadow-md rounded-lg p-6 flex-shrink-0 animate-slideInRight ${ theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-base-100 text-gray-900" }` }
          >
            <h3 className="text-xl font-semibold">{ exp.role }</h3>
            <p className="text-sm mt-1 italic">{ exp.company } | { exp.duration }</p>
            <p className="mt-2">{ exp.description }</p>
          </div>
        ) ) }
      </div>
    </section>
  );
};

export default Experience;
