import React, {useEffect, useState} from "react"

const Clicker = () => {

    const [count, setCount] = useState(0)

    const clickHandler = () => { 
        setCount( count + 1 )
        console.log("se hizo click");
     }
    
    //  CADA VEZ QUE SE HAGA RENDER Y EN EL MONTAJE
     useEffect(() => {
     console.log("Se hizo render");

     })
    
    // SÓLO EN EL MONTAJE

    useEffect(() => {
      console.log("Se hizo en el montaje");
    }, [])

    // CADA VEZ QUE CAMBIA COUNT Y EN EL MONTAJE

    useEffect(() => {
      console.log("Cada vez que cambia count");
    }, [count])
    

  return (
    <>
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <strong>Clicker</strong>
                <button onClick={clickHandler} className="btn">Aumentar</button>
                <strong>{ count }</strong>
            </div>
        </div>
    </>
  )
}
export default Clicker