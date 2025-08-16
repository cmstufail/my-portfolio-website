import { useEffect } from 'react';

const useTitle = ( title ) => {
    useEffect( () => {
        document.title = `${ title } || My Portfolio`;
    }, [ title ] );
};

export default useTitle;