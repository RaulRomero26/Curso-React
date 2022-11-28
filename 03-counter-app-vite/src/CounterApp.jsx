import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) =>{
    //se le pasas como paramtro el de las props, para usarlo, su valor inicial es el que mandamos desde el padre

    const [ counter, setCounter ] = useState( value ) //use state crea la propiedad en las dev tool, el primer valor desestructurado es el nombre que  le queremos poner a ese valor, el segundo valor es el nombre de la funcion mediante la cual queremos mutar el valor
                                                  // notese que en ningun momento se "definio" la funcion solo se usa y hace lo de dentro de los parentesis le dice a react, el estado cambio, redibuja el componente

    const handleAdd = () => {
        //console.log(event)
        setCounter(counter+1)
        //setCounter( (c) => c+1 ) es el mismo
    }

    const handleLess = () => {
        setCounter(counter-1)
    }

    const handleReset = () => {
        setCounter(value)//el mismo de las props
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleLess }>-1</button>
            <button aria-label="btn-reset" onClick={ handleReset }>Reset</button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0,
}