import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
// import React from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Programacion'])

    const onAddCategory = ( newCategory ) =>{
        if( categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories ]);
        //setCategories(cat => [...cat,'Valorant'] );
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            //setCategories={ setCategories}{/*PROPIEDAD QUE HACE REFERENCIA A UNA FUNCION del padre se pasa al hijo*/}
            onNewCategory = { event => onAddCategory(event) } //esto es una propiedad

        /> 
            {
                categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category}/>
                    ))
            }
    </>
  )
}
