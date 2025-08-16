import { useRef } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// components
import { useTheme } from './../context/ThemeProvider';
import useTitle from "./shared/hooks/UseTite";


const Contact = () => {

    useTitle( 'Contact || My Portfolio' )

    const { theme } = useTheme();

    const form = useRef();

    const sendEmail = ( e ) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_6b0e8l9", // EmailJS Service ID
                "template_z9f39sy", // Template ID
                form.current,
                "wnzyKDJavX_SQMy80" // Public Key
            )
            .then(
                () => {
                    Swal.fire( {
                        icon: "success",
                        title: "Message Sent!",
                        text: "Thank you for contacting us. We will get back to you soon.",
                        confirmButtonColor: "#3085d6",
                    } );
                    form.current.reset();
                },
                () => {
                    Swal.fire( {
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong! Please try again later.",
                        confirmButtonColor: "#d33",
                    } );
                }
            );
    };

    return (
        <section
            id="contact"
            className={ `py-16 px-6 md:px-16 transition-colors duration-500 ${ theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-base-100 text-gray-900"
                }` }
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold inline-block relative pb-2 dark:text-white">
                    Contact Us
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                </h2>
                {/* <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                    Drop me a line or visit my office in Sylhet.
                    Typically respond within 24 hours during work days.
                </p> */}
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Side: Title + Subtitle + Contact Cards */ }
                <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-semibold">Let's Connect</h3>
                    <p className={ `text-lg leading-relaxed ${ theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-base-100 text-gray-900" }` }>
                        I'm always excited to hear about new opportunities, collaborations, or just chat about shared interests.
                        Whether you have a project in mind, need professional consultation, or want to discuss potential
                        partnerships, feel free to reach out through any of these channels:
                    </p>

                    <div className="flex flex-col gap-4">
                        {/* Email Card */ }
                        <div
                            className={ `flex items-center gap-4 p-4 rounded shadow-md transition-colors cursor-pointer ${ theme === "dark" ? "bg-gray-800" : "bg-white"
                                }` }
                            onClick={ () => {
                                window.location.href = "mailto:cmstufail@gmail.com";
                            } }
                            title="send email"
                        >
                            <FaEnvelope className="text-blue-500 text-xl" />
                            <span className="hover:underline">cmstufail@gmail.com</span>
                        </div>

                        {/* Phone Card */ }
                        <div
                            className={ `flex items-center gap-4 p-4 rounded shadow-md transition-colors cursor-pointer ${ theme === "dark" ? "bg-gray-800" : "bg-white"
                                }` }
                        >
                            {/* phone call button */ }
                            <a
                                href="tel:+8801710649191"
                                className="text-green-500 hover:text-green-600 transition-colors"
                                title="call"
                            >
                                <FaPhone className="text-xl" />
                            </a>

                            {/* whatsapp button */ }
                            <a
                                href="https://wa.me/8801710649191"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:underline"
                                title="Message on WhatsApp"
                            >
                                <span className="bg-[#25D366] text-white p-1.5 rounded-full flex items-center justify-center">
                                    <FaWhatsapp className="text-lg" />
                                </span>
                                +880 1710 649191
                            </a>
                        </div>

                        {/* Location Card */ }
                        <div
                            className={ `flex items-center gap-4 p-4 rounded shadow-md transition-colors cursor-pointer hover:bg-opacity-90 ${ theme === "dark" ? "bg-gray-800" : "bg-white"
                                }` }
                            onClick={ () => {
                                const mapsUrl = `https://www.google.com/maps/place/Sylhet,+Bangladesh/@24.8949294,91.8687063,12z`;
                                window.open( mapsUrl, '_blank', 'noopener,noreferrer' );
                            } }
                            title="View on Google Maps"
                        >
                            <FaMapMarkerAlt className="text-red-500 text-xl" />
                            <span>Sylhet, Bangladesh</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */ }
                <div className={ `shadow-lg rounded-lg p-6 ${ theme === "dark" ? "bg-gray-900 text-gray-300 border border-gray-200" : "bg-base-100 text-gray-900  dark:border-gray-700" }` }>
                    <form
                        ref={ form }
                        onSubmit={ sendEmail }
                        className="flex flex-col gap-4"
                    >
                        {/* Form Subtitle */ }
                        <h3 className={ `text-xl font-semibold mb-4 ${ theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-base-100 text-gray-900" }` }>
                            Send Message
                        </h3>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your name"
                            required
                            className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your email"
                            required
                            className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            required
                            rows="5"
                            className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
