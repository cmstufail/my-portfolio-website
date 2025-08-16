import { FaGithub, FaLinkedin } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// components
import useTitle from "./shared/hooks/UseTite";


const projects = [
    {
        id: 1,
        title: "AppOrbit - Product Discovery Platform",
        description:
            "A ProductHunt-style app for discovering, submitting, and reviewing tech products with role-based dashboards.",
        technologies: [ "React", "Tailwind", "Express", "MongoDB", "Stripe" ],
        images: [
            "/images/apporbit.png",
        ],
        github: "https://github.com/cmstufail/app-orbit-server",
        linkedin: "https://www.linkedin.com/in/cmstufail/",
        details: "https://app-orbit.web.app",
    },
    {
        id: 2,
        title: "Volunteer Management System",
        description:
            "A platform to connect volunteers with organizations, manage event registrations, and track participation history.",
        technologies: [ "React", "Express", "MongoDB", "Firebase Auth" ],
        images: [
            "/images/volunteer.png",
        ],
        github: "https://github.com/cmstufail/volunteer-management-system-server",
        linkedin: "https://www.linkedin.com/in/cmstufail/",
        details: "https://volunteer-management-sys-a4e9f.web.app",
    },
    {
        id: 3,
        title: "Auction Gallery",
        description:
            "Auction Gallery is a modern online auction platform that allows users to bid on various products or artworks. It is a single-page application (SPA),",
        technologies: [ "React", "Tailwind", "DaisyUI" ],
        images: [
            "/images/auctiongallery.png",
        ],
        github: "https://github.com/cmstufail/plant-care-tacker-server",
        linkedin: "https://www.linkedin.com/in/cmstufail/",
        details: "https://benevolent-phoenix-1fa907.netlify.app/",
    },
];

const Projects = () => {

    useTitle( 'Projects || My Portfolio' )

    return (
        <div className="bg-base-200 dark:bg-gray-800 py-16 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold inline-block relative pb-2 dark:text-white">
                        Projects
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                    </h2>
                    {/* <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                    Drop me a line or visit my office in Sylhet.
                    Typically respond within 24 hours during work days.
                </p> */}
                </div>
                <div className="space-y-12">
                    { projects.map( ( project ) => (
                        <div
                            key={ project.id }
                            className={ `grid md:grid-cols-2 gap-8 items-center bg-base-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg ${ project.id % 2 === 0 ? 'md:flex-row-reverse' : '' }` }
                        >
                            <motion.div
                                className={ `overflow-hidden rounded-lg ${ project.id % 2 === 0 ? 'md:order-2' : 'md:order-1' }` }
                                animate={ { x: [ 0, -100, 0 ] } }
                                transition={ {
                                    repeat: Infinity,
                                    duration: 6,
                                    ease: "easeInOut",
                                } }
                            >
                                <div className="flex gap-4">
                                    { project.images.map( ( img, index ) => (
                                        <img
                                            key={ index }
                                            src={ img }
                                            alt={ `${ project.title } screenshot` }
                                            className="w-full h-64 object-cover rounded-lg"
                                        />
                                    ) ) }
                                </div>
                            </motion.div>

                            <div className={ `${ project.id % 2 === 0 ? 'md:order-1' : 'md:order-2' }` }>
                                <h3 className="text-2xl font-semibold mb-4">{ project.title }</h3>
                                <p className="w-md mb-4">{ project.description }</p>
                                {/* Technologies */ }
                                <div className="flex flex-wrap gap-2 mb-4">
                                    { project.technologies.map( ( tech, i ) => (
                                        <span
                                            key={ i }
                                            className="px-3 py-1 text-sm bg-primary text-white rounded-full"
                                        >
                                            { tech }
                                        </span>
                                    ) ) }
                                </div>
                                {/* Links */ }
                                <div className="flex gap-4">
                                    <a
                                        href={ project.details }
                                        target="_blank"
                                        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
                                    >
                                        View Details
                                    </a>
                                    <a
                                        href={ project.github }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-2xl text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        href={ project.linkedin }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-2xl text-blue-600 hover:text-blue-800"
                                    >
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) ) }
                </div>
            </div>
        </div>
    );
};

export default Projects;
