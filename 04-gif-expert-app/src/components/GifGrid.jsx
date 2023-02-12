import PropTypes from 'prop-types';
//componentes
import { GiftItem } from './GiftItem';
import useFetchGifs from '../hooks/useFetchGifs';
//funciones no propias de react

export const GifGrid = ({ category }) => {

    const { images,isLoading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {   //if corto solo para valores true
                isLoading && (<h2>Cargando...</h2>)
            }
            
            <div className='card-grid'>
                {
                    images.map((image)=> (
                        <GiftItem 
                            key={image.id}
                           { ...image }
                        />
                    ))
                }
            </div>

        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
