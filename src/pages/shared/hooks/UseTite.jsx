import { useEffect } from 'react';

const useTitle = ( title ) => {
    useEffect( () => {
        document.title = `${ title } || Tufail's Portfolio`;
    }, [ title ] );
};

export default useTitle;