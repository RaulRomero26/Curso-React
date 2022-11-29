import { useState } from 'react';
// import React from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Programacion','Dragon Ball'])

    const onAddCategory = () =>{
        setCategories(['Valorant', ...categories]);
        //setCategories(cat => [...cat,'Valorant'] );
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <ol>
            {
                categories.map(category => {
                    return <li key={category}>{category}</li>
                })
            }
            <button onClick={onAddCategory}>Agregar</button>
        </ol>
    </>
  )
}
