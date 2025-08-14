import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = ( { theme } ) => {
    const form = useRef();
    const [ successMsg, setSuccessMsg ] = useState( "" );

    const sendEmail = ( e ) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_evrm8xj",    // EmailJS Service ID
                "YOUR_TEMPLATE_ID",   // EmailJS Template ID
                form.current,
                "YOUR_PUBLIC_KEY"     // EmailJS Public Key / User ID
            )
            .then(
                ( result ) => {
                    console.log( result.text );
                    setSuccessMsg( "Message sent successfully!" );
                    e.target.reset();
                },
                ( error ) => {
                    console.log( error.text );
                    setSuccessMsg( "Failed to send message. Try again." );
                }
            );
    };

    return (
        <section
            id="contact"
            className={ `py-16 px-6 md:px-16 transition-colors duration-500
        ${ theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-base-100 text-gray-900" }
        `}
        >
            <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>

            <form
                ref={ form }
                onSubmit={ sendEmail }
                className="max-w-xl mx-auto flex flex-col gap-4"
            >
                <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
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

                { successMsg && (
                    <p className="mt-2 text-center font-medium">
                        { successMsg }
                    </p>
                ) }
            </form>
        </section>
    );
};

export default Contact;
