import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [ isVisible, setIsVisible ] = useState( false );

  useEffect( () => {
    const toggleVisibility = () => {
      if ( window.pageYOffset > 100 ) {
        setIsVisible( true );
      } else {
        setIsVisible( false );
      }
    };

    window.addEventListener( 'scroll', toggleVisibility );
    return () => window.removeEventListener( 'scroll', toggleVisibility );
  }, [] );

  const scrollToTop = () => {
    window.scrollTo( {
      top: 0,
      behavior: 'smooth'
    } );
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      { isVisible && (
        <button
          onClick={ scrollToTop }
          aria-label="Scroll to top"
          className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
        >
          <FaArrowUp className="text-xl" />
        </button>
      ) }
    </div>
  );
};

export default ScrollToTopButton;