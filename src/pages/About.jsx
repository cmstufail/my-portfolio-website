import { useTheme } from "../context/ThemeProvider";

const About = () => {

    const { theme } = useTheme();

    return (
        <section
            id="about"
            className={ `py-16 px-4 flex justify-center transition-colors duration-500
        ${ theme === "dark"
            ? "bg-gray-900 text-gray-300"
            : "bg-base-100 text-gray-900"
            }` }
        >
            <div className={`max-w-3xl shadow-lg rounded-lg p-8 transition-colors duration-500 ${ theme === "dark"
            ? "bg-gray-900 text-gray-300"
            : "bg-base-100 text-gray-900"
            }`}>
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-lg leading-relaxed">
                    Hi, I’m Tufail Ahmed, a passionate MERN stack developer. I love building clean, responsive,
                    and user-friendly web applications. I enjoy learning new technologies and improving my coding skills.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    In my free time, I explore open-source projects, write technical blogs, and work on personal projects
                    to enhance my portfolio.
                </p>
            </div>
        </section>
    );
};

export default About;
