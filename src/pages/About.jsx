// components
import { useTheme } from "../context/ThemeProvider";
import useTitle from "./shared/hooks/UseTite";

const About = () => {

    useTitle( 'About Us || My Portfolio' )

    const { theme } = useTheme();

    return (
        <section
            id="about"
            className={ ` px-4 flex justify-center transition-colors duration-500
        ${ theme === "dark"
                    ? "bg-gray-900 text-gray-300"
                    : "bg-base-100 text-gray-900"
                }` }
        >
            <div className={ `max-w-3xl shadow-lg rounded-lg p-8 transition-colors duration-500 ${ theme === "dark"
                ? "bg-gray-900 text-gray-300"
                : "bg-base-100 text-gray-900"
                }` }>
                <div className="mb-12">
                    <h2 className="text-3xl font-bold inline-block relative pb-2 dark:text-white">
                        About Me
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                    </h2>
                    {/* <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                    Drop me a line or visit my office in Sylhet.
                    Typically respond within 24 hours during work days.
                </p> */}
                </div>
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
