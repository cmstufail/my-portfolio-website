// components
import { useTheme } from "../context/ThemeProvider";

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
  const { isDark } = useTheme();

  return (
    <section
      id="experience"
      className={ `py-16 px-6 md:px-16 transition-colors duration-500 ${ isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }` }
    >
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

      <div className="flex overflow-x-auto gap-6 px-4 md:px-0">
        { experienceData.map( ( exp, index ) => (
          <div
            key={ index }
            className="min-w-[250px] bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex-shrink-0 animate-slideInRight"
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
