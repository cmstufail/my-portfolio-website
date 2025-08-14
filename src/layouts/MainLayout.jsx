import { useState } from 'react';

// components
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home';


const MainLayout = () => {
    const [ activeSection, setActiveSection ] = useState( "home" );

    const scrollToSection = ( id ) => {
        setActiveSection( id );
        const el = document.getElementById( id );
        if ( el ) {
            el.scrollIntoView( { behavior: "smooth", block: "start" } );
        }
    };

    return (
        <>
            <Navbar
                activeSection={ activeSection }
                scrollToSection={ scrollToSection } className="flex flex-col min-h-screen"
            />
            {/*/ Main Content */ }
            <main classNameflex-1 />
            <Home />
            <Footer
                activeSection={ activeSection }
                scrollToSection={ scrollToSection }
            />
        </>
    )
}

export default MainLayout
