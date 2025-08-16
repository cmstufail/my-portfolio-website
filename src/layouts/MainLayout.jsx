import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Outlet, useNavigate } from 'react-router-dom';

// components
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
// import Home from '../pages/Home';
import ScrollToUpButton from '../components/ScrollToUp';


const MainLayout = () => {

    const scrollContainerRef = useRef( null );
    const { scroll } = useLocomotiveScroll();
    const navigate = useNavigate();
    const [ activeSection, setActiveSection ] = useState( "home" );

    const navLinks = useMemo( () => [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "education", label: "Education" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ], [] );



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

        scroll?.on( 'scroll', handleScroll );
        return () => scroll?.off( 'scroll', handleScroll );
    }, [ scroll, navigate, navLinks ] );

    return (
        <div ref={ scrollContainerRef } data-scroll-container className="flex flex-col min-h-screen">
            <Navbar activeSection={ activeSection } scrollToSection={ scrollToSection } />
            <main className="flex-1" data-scroll-section>
                <Outlet />
            </main>

            <Footer activeSection={ activeSection } scrollToSection={ scrollToSection } />
            <ScrollToUpButton />
        </div>
    );
};

export default MainLayout;