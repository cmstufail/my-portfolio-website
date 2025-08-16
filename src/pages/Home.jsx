import { useEffect, useRef, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useNavigate } from 'react-router-dom';

// components
import Navbar from './../components/Navbar/Navbar';
import Banner from './Banner';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import useTitle from './shared/hooks/UseTite';

const Home = () => {

    useTitle( 'Home || My Portfolio' )

    const scrollContainerRef = useRef( null );
    const { scroll } = useLocomotiveScroll();
    const [ activeSection, setActiveSection ] = useState( 'home' );
    const navigate = useNavigate();

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "education", label: "Education" },
        { id: "experience", label: "Experience" },
        { id: "contact", label: "Contact" },
    ];

    const scrollToSection = ( id ) => {
        if ( scroll ) {

            scroll.scrollTo( `#${ id }`, {
                offset: -100,
                duration: 800,
                easing: [ 0.25, 0, 0.35, 1 ],
                callback: () => {
                    setActiveSection( id );
                    window.history.pushState( {}, '', `#${ id }` );
                    navigate( `#${ id }`, { replace: true } );
                }
            } );
        } else {
            const element = document.getElementById( id );
            if ( element ) {
                window.scrollTo( {
                    top: element.offsetTop - 100,
                    behavior: 'smooth'
                } );
                setActiveSection( id );
                window.history.pushState( {}, '', `#${ id }` );
                navigate( `#${ id }`, { replace: true } );
            }
        }
    };

    useEffect( () => {
        const hash = window.location.hash.substring( 1 );
        if ( hash && navLinks.some( link => link.id === hash ) ) {
            setActiveSection( hash );
        }

        if ( !scroll ) {
            const handleScroll = () => {
                const scrollY = window.scrollY;
                document.querySelectorAll( '[data-scroll-section]' ).forEach( ( section ) => {
                    const top = section.offsetTop;
                    const height = section.clientHeight;
                    const sectionId = section.id;

                    if ( scrollY >= top - 150 && scrollY < top + height - 150 ) {
                        setActiveSection( sectionId );
                        window.history.replaceState( {}, '', `#${ sectionId }` );
                    }
                } );
            };

            window.addEventListener( 'scroll', handleScroll );
            return () => window.removeEventListener( 'scroll', handleScroll );
        }

        const handleScroll = ( obj ) => {
            const scrollY = obj.scroll.y;
            document.querySelectorAll( '[data-scroll-section]' ).forEach( ( section ) => {
                const top = section.offsetTop;
                const height = section.clientHeight;
                const sectionId = section.id;

                if ( scrollY >= top - 150 && scrollY < top + height - 150 ) {
                    setActiveSection( sectionId );
                    window.history.replaceState( {}, '', `#${ sectionId }` );
                    navigate( `#${ sectionId }`, { replace: true } );
                }
            } );
        };

        scroll.on( 'scroll', handleScroll );
        return () => scroll.off( 'scroll', handleScroll );
    }, [ scroll, navigate ] );

    return (
        <div ref={ scrollContainerRef } data-scroll-container>
            <Navbar activeSection={ activeSection } scrollToSection={ scrollToSection } />

            <section id="home" data-scroll-section>
                <Banner />
            </section>
            <section id="about" data-scroll-section>
                <About />
            </section>
            <section id="skills" data-scroll-section>
                <Skills />
            </section>
            <section id="education" data-scroll-section>
                <Education />
            </section>
            <section id="experience" data-scroll-section>
                <Experience />
            </section>
            <section id="projects" data-scroll-section>
                <Projects />
            </section>
            <section id="contact" data-scroll-section>
                <Contact />
            </section>
        </div>
    );
};

export default Home;