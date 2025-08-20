import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "../context/ThemeProvider";

const Banner = () => {
    const { theme } = useTheme();

    return (
        <div
            className={ `flex flex-col min-h-screen relative overflow-hidden ${ theme === "dark"
                    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
                    : "bg-gradient-to-br from-blue-50 via-white to-blue-100"
                }` }
        >
            {/* Decorative Glow Background */ }
            <div className="absolute inset-0 -z-10">
                <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
                <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-3xl bottom-20 right-10 animate-pulse"></div>
            </div>

            {/* Hero Section */ }
            <section
                id="home"
                className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-20 lg:px-32 py-20"
            >
                {/* Left Content */ }
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                {/* {`bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`} */}
                
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-space-grotesk">
                        <span
                            className={ `${ theme === "dark" ? "text-white" : "text-gray-900"
                                } bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent` }
                        >
                            <Typewriter
                                words={ [ "Hi, I’m Tufail Ahmed", "Frontend Developer" ] }
                                loop={ 0 }
                                cursor
                                cursorStyle="_"
                                typeSpeed={ 70 }
                                deleteSpeed={ 50 }
                                delaySpeed={ 1500 }
                            />
                        </span>
                    </h1>

                    <p
                        className={ `max-w-lg text-base md:text-lg leading-relaxed ${ theme === "dark" ? "text-gray-300" : "text-gray-700"
                            }` }
                    >
                        A passionate{ " " }
                        <span className="font-semibold">Frontend Developer</span> crafting
                        modern, clean and user-friendly web experiences.
                    </p>

                    {/* Social Links */ }
                    <div className="flex justify-center md:justify-start gap-5 text-2xl">
                        { [
                            {
                                href: "https://github.com/cmstufail",
                                icon: <FaGithub />,
                            },
                            {
                                href: "https://linkedin.com/in/cmstufail",
                                icon: <FaLinkedin />,
                            },
                            {
                                href: "https://facebook.com/tufail83",
                                icon: <FaFacebookF />,
                            },
                        ].map( ( link, idx ) => (
                            <a
                                key={ idx }
                                href={ link.href }
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded-full border border-gray-400/40 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                            >
                                { link.icon }
                            </a>
                        ) ) }
                    </div>

                    {/* Resume Button */ }
                    <a
                        href="/resume.pdf"
                        download
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        📄 Download Resume
                    </a>
                </div>

                {/* Right Content - Profile Image */ }
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative">
                        {/* Glowing border */ }
                        <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-500 to-indigo-600 p-1 animate-spin-slow"></div>
                        <img
                            src="/profile.png"
                            alt="Profile"
                            className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl animate-float"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;

