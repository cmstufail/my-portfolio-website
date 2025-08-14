import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = ( { activeSection, scrollToSection } ) => {

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "education", label: "Education" },
        { id: "experience", label: "Experienc" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];


    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 text-center space-y-6">

                {/* Quick Links */ }
                <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                    { navLinks.map( ( link ) => (
                        <li
                            key={ link.id }
                            onClick={ () => scrollToSection( link.id ) }
                            className={ `cursor-pointer ${ activeSection === link.id
                                ? "text-blue-500 font-semibold"
                                : "hover:text-blue-500 dark:hover:text-blue-400"
                                }` }
                        >
                            { link.label }
                        </li>
                    ) ) }
                </ul>

                {/* Social Icons */ }
                <div className="flex justify-center space-x-6 text-lg">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>

                {/* Copyright */ }
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © { new Date().getFullYear() } Tufail Ahmed. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
