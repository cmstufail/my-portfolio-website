import { FaGithub, FaLinkedin } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Plant Care Tracker",
        description:
            "A full-stack web app to manage and track plant care schedules with reminders, notes, and progress tracking.",
        technologies: [ "React", "Tailwind", "Node.js", "MongoDB", "Firebase" ],
        images: [
            "https://via.placeholder.com/500x300/4CAF50/ffffff?text=Plant+Care+1",
            "https://via.placeholder.com/500x300/81C784/ffffff?text=Plant+Care+2",
            "https://via.placeholder.com/500x300/66BB6A/ffffff?text=Plant+Care+3",
        ],
        github: "https://github.com/cmstufail/plant-care-tacker-server",
        linkedin: "https://www.linkedin.com/in/cmstufail/",
        details: "#",
    },
    {
        id: 2,
        title: "Volunteer Management System",
        description:
            "A platform to connect volunteers with organizations, manage event registrations, and track participation history.",
        technologies: [ "React", "Express", "MongoDB", "Firebase Auth" ],
        images: [
            "https://via.placeholder.com/500x300/2196F3/ffffff?text=Volunteer+1",
            "https://via.placeholder.com/500x300/64B5F6/ffffff?text=Volunteer+2",
        ],
        github: "https://github.com/cmstufail/volunteer-management-system-server",
        linkedin: "https://www.linkedin.com/in/cmstufail/",
        details: "#",
    },
    {
        id: 3,
        title: "AppOrbit - Product Discovery Platform",
        description:
            "A ProductHunt-style app for discovering, submitting, and reviewing tech products with role-based dashboards.",
        technologies: [ "React", "Tailwind", "Express", "MongoDB", "Stripe" ],
        images: [
            "https://via.placeholder.com/500x300/FF9800/ffffff?text=AppOrbit+1",
            "https://via.placeholder.com/500x300/FFB74D/ffffff?text=AppOrbit+2",
        ],
        github: "https://github.com/cmstufail/app-orbit-server",
        linkedin: "https://www.linkedin.com/in/cmstufail/",
        details: "#",
    },
];

const Projects = () => {
    return (
        <div className="bg-base-200 dark:bg-gray-800 py-16 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

                <div className="space-y-12">
                    { projects.map( ( project ) => (
                        <div
                            key={ project.id }
                            className="grid md:grid-cols-2 gap-8 items-center bg-base-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg"
                        >
                            {/* Left: Animated Images */ }
                            <motion.div
                                className="overflow-hidden rounded-lg"
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

                            {/* Right: Content */ }
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">{ project.title }</h3>
                                <p className="mb-4">{ project.description }</p>

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
