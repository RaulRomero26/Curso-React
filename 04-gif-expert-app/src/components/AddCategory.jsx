import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => { //desestructuracuib de las props

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => { //se dessestructura el event
    setInputValue(target.value);
   
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if(newInputValue.length<=1) return
    //setCategories( categories => [inputValue,...categories] ); //al mandarlo en callback obtienes el "estado acutual" para no perder la data
    onNewCategory(newInputValue)
    setInputValue('') //para resetar
  }

  return (
    <form onSubmit={(event)=> onSubmit(event)} aria-label="form">
        <input 
            type="text" 
            placeholder="Buscar gifs" 
            id="" 
            value={ inputValue }
            onChange={ (event) => onInputChange(event) } //se puede obviar el event
        />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}