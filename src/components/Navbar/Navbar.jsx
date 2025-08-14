import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

// components
import { useTheme } from "../../context/ThemeProvider";
import useTitle from "../../pages/shared/hooks/UseTite";

const Navbar = ( { activeSection, scrollToSection } ) => {
    const [ isOpen, setIsOpen ] = useState( false );
    const { theme, toggleTheme } = useTheme();

    useTitle( 'Home' );

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "education", label: "Education" },
        { id: "experience", label: "Experienc" },
        { id: "contact", label: "Contact" },
    ];


    return (
        <nav className={ `transition-colors duration-300 fixed w-full z-50 shadow-sm py-3 top-0 left-0 right-0 ${ theme === "dark"
            ? "bg-gray-900 text-gray-300"
            : "bg-base-100 text-gray-900"
            }` }
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Mobile Menu Button */ }
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={ () => setIsOpen( !isOpen ) }
                            className="text-gray-800 dark:text-white focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>

                    {/* Logo */ }
                    <div
                        className="text-xl font-bold cursor-pointer text-gray-900 dark:text-white"
                        onClick={ () => scrollToSection( "home" ) }
                    >
                        MyLogo
                    </div>

                    {/* Nav Links - Desktop */ }
                    <ul className="hidden md:flex space-x-6">
                        { navLinks.map( ( link ) => (
                            <li
                                key={ link.id }
                                onClick={ () => scrollToSection( link.id ) }
                                className={ `cursor-pointer transition-colors ${ activeSection === link.id
                                    ? "text-blue-500 dark:text-blue-400 font-semibold"
                                    : "text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                                    }` }
                            >
                                { link.label }
                            </li>
                        ) ) }
                    </ul>

                    {/* Right Side */ }
                    <div className="flex items-center space-x-4">
                        <a
                            href="/resume.pdf"
                            download
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                            Resume
                        </a>
                        <button
                            onClick={ toggleTheme }
                            className="text-gray-700 dark:text-gray-200 focus:outline-none"
                        >
                            { theme === "light" ? <FaMoon /> : <FaSun /> }
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */ }
            { isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 shadow-md">
                    <ul className="flex flex-col space-y-2 p-4">
                        { navLinks.map( ( link ) => (
                            <li
                                key={ link.id }
                                onClick={ () => scrollToSection( link.id ) }
                                className={ `cursor-pointer transition-colors ${ activeSection === link.id
                                    ? "text-blue-500 dark:text-blue-400 font-semibold"
                                    : "text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                                    }` }
                            >
                                { link.label }
                            </li>
                        ) ) }
                    </ul>
                </div>
            ) }
        </nav>
    );
};

export default Navbar;

