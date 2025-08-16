import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

// components
import { useTheme } from "../../context/ThemeProvider";

const Navbar = ( { activeSection, scrollToSection } ) => {

    const [ isOpen, setIsOpen ] = useState( false );
    const { theme, toggleTheme } = useTheme();


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
        <nav className={ `transition-colors duration-300 fixed w-full z-50 shadow-sm py-2 top-0 left-0 right-0 ${ theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-base-100 text-gray-900"
            }` }>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-12">
                    {/* Mobile Menu Button */ }
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={ () => setIsOpen( !isOpen ) }
                            className={ `text-lg font-bold cursor-pointer transition-opacity ${ theme === "dark"
                                ? "text-gray-300 hover:text-blue-400"
                                : "text-gray-700 hover:text-blue-600" }` }
                        >
                            ☰
                        </button>
                    </div>

                    {/* Logo */ }
                    <button
                        onClick={ () => scrollToSection( "home" ) }
                        className={ `text-xl font-bold cursor-pointer transition-opacity ${ theme === "dark"
                            ? "text-gray-300 hover:text-blue-400"
                            : "text-gray-900 hover:text-blue-600"
                            }` }
                    >
                        TAhmed
                    </button>

                    {/* Nav Links - Desktop */ }
                    <div className="hidden md:flex items-center">
                        <ul className="flex space-x-6">
                            { navLinks.map( ( link ) => (
                                <li key={ link.id }>
                                    <button
                                        onClick={ () => {
                                            scrollToSection( link.id );
                                            window.history.pushState( {}, '', `#${ link.id }` );
                                        } }
                                        className={ `relative px-1 py-2 text-sm transition-colors cursor-pointer ${ activeSection === link.id
                                            ? "text-blue-600 dark:text-blue-400 font-medium"
                                            : theme === "dark"
                                                ? "text-gray-300 hover:text-blue-400"
                                                : "text-gray-700 hover:text-blue-600"
                                            }` }
                                    >
                                        { link.label }
                                        <span className={ `
                                    absolute left-0 bottom-0 h-0.5 
                                    bg-blue-600 dark:bg-blue-400
                                    transition-all duration-300
                                    ${ activeSection === link.id ? 'w-full' : 'w-0' }
                                `}></span>
                                    </button>
                                </li>
                            ) ) }
                        </ul>
                    </div>

                    {/* Right Side */ }
                    <div className="flex items-center space-x-4">
                        <a
                            href="/resume.pdf"
                            download
                            className="px-3 py-1.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                            Resume
                        </a>
                        <button
                            onClick={ toggleTheme }
                            className={ `focus:outline-none p-2 rounded-full transition-colors ${ theme === "dark"
                                ? "bg-gray-900 text-gray-300 hover:bg-gray-700"
                                : "bg-base-100 text-gray-900 hover:bg-gray-200"
                                }` }
                            aria-label={ `Toggle ${ theme === "light" ? "dark" : "light" } mode` }
                        >
                            { theme === "light" ? <FaMoon /> : <FaSun /> }
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */ }
            { isOpen && (
                <div className="md:hidden">
                    <ul className="flex flex-col space-y-1 p-2">
                        { navLinks.map( ( link ) => (
                            <li key={ link.id } className="relative">
                                <button
                                    onClick={ () => {
                                        scrollToSection( link.id );
                                        window.history.pushState( {}, '', `#${ link.id }` );
                                        setIsOpen( false );
                                    } }
                                    className={ `block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${ activeSection === link.id
                                        ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium"
                                        : theme === "dark"
                                            ? "text-gray-300 hover:bg-gray-700"
                                            : "text-gray-700 hover:bg-gray-100"
                                        }` }
                                >
                                    { link.label }
                                </button>
                            </li>
                        ) ) }
                    </ul>
                </div>
            ) }
        </nav>
    );
};

export default Navbar;