import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
// import React from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Programacion','Dragon Ball'])

    const onAddCategory = ( onNewCategory ) =>{
        console.log(onNewCategory);
        setCategories([ onNewCategory, ...categories ]);
        //setCategories(cat => [...cat,'Valorant'] );
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            //setCategories={ setCategories}{/*PROPIEDAD QUE HACE REFERENCIA A UNA FUNCION del padre se pasa al hijo*/}
            onNewCategory = { event => onAddCategory(event) } //esto es una propiedad
        /> 
        <ol>
            {
                categories.map(category => {
                    return <li key={category}>{category}</li>
                })
            }
           
        </ol>
    </>
  )
}
