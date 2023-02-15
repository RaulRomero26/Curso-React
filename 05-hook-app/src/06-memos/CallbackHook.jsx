import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    //sirve para memorizar funciones, si usas el callback del use state funciona
    //si esa funcion altera un componente la funcion se genera en otro espacio en meroria salvo
    //uses el useCallBack, ojo, debes de memorizar tambien el compoente al que vas a afctar
    
    //nota asegurate que la funcion que memorizas aca sea la misma que mandas a llamar en el hijo 
    //es decir ocupas parametros, debes memorizar la funcion con parametros desde el padre
    const incrementFather = useCallback(
      (val) => {
        setCounter( (value)=>value+val  );
      },
      [],
    )
    

    // const incrementFather = () => {
    //     setCounter(counter+1);
    // }

  return (
   <>
        <h1>useCallback Hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={incrementFather}/>
   </>
  )
}
