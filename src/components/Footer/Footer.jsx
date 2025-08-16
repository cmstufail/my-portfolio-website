import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

// components
import { useTheme } from "../../context/ThemeProvider";

const Footer = ( { activeSection, scrollToSection } ) => {
    const { theme } = useTheme();

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "education", label: "Education" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <footer className={ `py-8 mt-16 ${ theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-base-100 text-gray-900" }` }>
            <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
                {/* Quick Links with ScrollLink */ }
                <ul className="flex flex-wrap justify-center gap-6">
                    { navLinks.map( ( link ) => (
                        <li key={ link.id } className="flex flex-col items-center">
                            <button
                                onClick={ () => scrollToSection( link.id ) }
                                className={ `cursor-pointer transition-colors text-sm ${ activeSection === link.id
                                    ? "text-blue-600 dark:text-blue-400 font-medium"
                                    : theme === "dark"
                                        ? "text-gray-300 hover:text-blue-400"
                                        : "text-gray-700 hover:text-blue-600"
                                    }` }
                            >
                                { link.label }
                                { activeSection === link.id && (
                                    <span className="block mx-auto mt-1 h-0.5 w-4 bg-blue-600 dark:bg-blue-400"></span>
                                ) }
                            </button>
                        </li>
                    ) ) }
                </ul>

                {/* Social Icons */ }
                <div className="flex justify-center space-x-6 text-lg">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 dark:hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>

                {/* Copyright */ }
                <p className={ `text-xs ${ theme === "dark" ? "text-gray-400" : "text-gray-600" }` }>
                    © { new Date().getFullYear() } Tufail Ahmed. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;