import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    
    //cada componente tiene su propio estado, cada componente tiene sus 10 imagenes
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
       getImages();
    }, [])

    return {
        images, //PROPIEDAD CON El msimo nombre de retorno es6
        isLoading
    }
}

export default useFetchGifs
