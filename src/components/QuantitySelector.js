import { useState } from "react"
import { Link } from "react-router-dom"

const QuantitySelector = ({stock, onAddToCart}) => {

    const [cantidad, setCantidad] = useState(1)
    const [disabled, setDisabled] = useState(true)
  
    const aumentar = () => { 
  
      setCantidad( cantidad + 1 )
    
   }
  
   const disminuir = () => {
  
     setCantidad (cantidad - 1)
  
   }
  
    return (
      <>
        <div className="flex flex-col items-center">
              <div className="flex flex-col items-center gap-1">
                  <strong>Cantidad</strong>
                  <strong>{ cantidad }</strong>
                  <div className="flex gap-2">
                    <button disabled= {cantidad === 1} onClick={disminuir} className="btn">-</button>
                    <button disabled={cantidad === stock} onClick={aumentar} className="btn">+</button>
                  </div>
                  <div className="flex flex-row gap-1">
                    <button className="btn" onClick={() => {
                      onAddToCart(cantidad)
                      setDisabled(false)

                      }}>Agregar al carrito</button>
                    <Link to={"/cart"} className={disabled ? "hidden" : "btn"}>Ir al carrito</Link>
                  </div>
              </div>
          </div>
      </>
    )
  }
export default QuantitySelector