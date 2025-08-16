// components
import { useTheme } from "../context/ThemeProvider";
import useTitle from "./shared/hooks/UseTite";

const educationData = [
  {
    degree: "Bachelor of Arts",
    institute: "National University",
    year: "2002 - 203",
    description: "ocused on Computer Science and Software Development.",
  },
  {
    degree: "Higher Secondary Certificate",
    institute: "Madrahsa Education Board",
    year: "2001 - 2003",
    description: "Advanced studies in Quranic sciences (Tafsir), Hadith, and Fiqh. Specialized in Arabic literature and Islamic jurisprudence.",
  },
];

const Education = () => {

  useTitle('Education || My Portfolio')

  const { theme } = useTheme();

  return (
    <section
      id="education"
      className={ `py-16 px-6 md:px-16 transition-colors duration-500 ${ theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-base-100 text-gray-900" }` }
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold inline-block relative pb-2 dark:text-white">
          Education
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
        </h2>
        {/* <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                    Drop me a line or visit my office in Sylhet.
                    Typically respond within 24 hours during work days.
                </p> */}
      </div>

      <div className={ `flex flex-col space-y-6 max-w-3xl mx-auto ${ theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-base-100 text-gray-900" }` }>

        { educationData.map( ( edu, index ) => (
          <div
            key={ index }
            className={ `shadow-md rounded-lg p-6 animate-slideUp ${ theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-base-100 text-gray-900" }` }
          >
            <h3 className="text-xl font-semibold">{ edu.degree }</h3>
            <p className="text-sm mt-1 italic">{ edu.institute } | { edu.year }</p>
            <p className="mt-2">{ edu.description }</p>
          </div>
        ) ) }
      </div>
    </section>
  );
};

export default Education;