// components
import { useTheme } from "../context/ThemeProvider";

const educationData = [
  {
    degree: "B.Sc in Computer Science",
    institute: "ABC University",
    year: "2020 - 2024",
    description: "Focused on full-stack development, data structures, and algorithms.",
  },
  {
    degree: "Higher Secondary Certificate",
    institute: "XYZ College",
    year: "2018 - 2020",
    description: "Science major with strong foundation in mathematics and physics.",
  },
];

const Education = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="education"
      className={ `py-16 px-6 md:px-16 transition-colors duration-500 ${ isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }` }
    >
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        { educationData.map( ( edu, index ) => (
          <div
            key={ index }
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 animate-slideUp"
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