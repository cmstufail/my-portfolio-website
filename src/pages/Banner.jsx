import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
// import { Link } from "react-router-dom";

// components
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
import { Typewriter } from 'react-simple-typewriter';

export default function Banner() {
    return (
        <div className="flex flex-col min-h-screen bg-base-200 dark:bg-gray-900">
            {/* Navbar */ }
            {/* <Navbar /> */ }

            {/* Banner Section */ }
            <section
                id="home"
                className="flex-1 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-16 py-16"
            >
                {/* Left Content */ }
                <div className="md:w-1/2 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">
                        {/* Hi, I’m <span className="text-accent">Tufail Ahmed</span> */ }
                        <Typewriter
                            words={ [ 'Hi, I’m Tufail Ahmed', 'Frontend Developer' ] }
                            loop={ 0 }
                            cursor
                            cursorStyle="_"
                            typeSpeed={ 70 }
                            deleteSpeed={ 50 }
                            delaySpeed={ 1500 }
                        />
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                        A passionate Frontend Developer crafting modern and user-friendly web experiences.
                    </p>

                    {/* Social Links */ }
                    <div className="flex justify-center md:justify-start gap-4 text-2xl">
                        <a
                            href="https://github.com/cmstufail"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-blue-500 transition-colors"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/cmstufail"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-blue-500 transition-colors"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://facebook.com/tufail83"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-blue-500 transition-colors"
                        >
                            <FaFacebookF />
                        </a>
                    </div>

                    {/* Resume Button */ }
                    <a
                        href="/resume.pdf"
                        // target="_blank"
                        download
                        rel="noopener noreferrer"
                        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        📄 Download Resume
                    </a>
                </div>

                {/* Right Content - Image */ }
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img
                        src="/profile.png"
                        alt="Profile"
                        className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-primary"
                    />
                </div>
            </section>

            {/* Footer */ }
            {/* <Footer /> */ }
        </div>
    );
}
