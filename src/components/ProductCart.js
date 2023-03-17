import { useCart } from "../context/CartContext"
import { Icon } from '@iconify/react';
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";

const ProductCart = () => {

    const {items, clearCart, getTotalItemCount, getTotalPrice, removeItem} = useCart()
    const [user, setUser] = useState({})
    const [hidden, setHidden] = useState(true)

    if (items.length === 0) {
      return  <div className="flex flex-col items-center gap-5 my-20">
                <Icon icon="mdi:warning-circle-outline" width="100" />
                <h1 className="text-5xl">El carrito está vacío</h1>
              </div>
    }



    const makeOrder = () => {
      const order = {
        buyer: user,
        items: items,
        total: getTotalPrice()
      }
      console.log(order);
      saveOrder(order)
    }

    const saveOrder = async (order) => {

      const db = getFirestore()
      const orderCollection = collection(db, "orders")
      const id = await addDoc(orderCollection, order)
      console.log(id);
      endOrder(id.id)
    }

    const endOrder = async (id) => {
      Swal.fire({
        title:'Felicidades por su compra',
        text:`Su codigo de compra es: ${id}`,
        background: "#191D24"
      }
        
        
        )
      clearCart()
    }

  

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          {items.map(item => {
            return  <div key={item.id} className="card bg-base-100 shadow-xl w-screen">
                      <div className="card-body flex-row items-center justify-evenly">
                        <div>
                          <img className=" w-32" alt={item.name} src={item.img}/>
                        </div>
                        <h2 className="card-title">{item.name}</h2>
                        <p className="">${item.precio}</p>
                        <p className="text text">{item.cantidad}</p>
                        <div className="card-actions justify-end">
                          <button onClick={() => {removeItem(item.id)}} className="btn btn-primary"><Icon icon="ph:trash-bold" width="20" height="20" /></button>
                        </div>
                      </div>
                    </div>
        
            })} 
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-info">Total: ${getTotalPrice()}</h1>
          <h1 className="text-info">{getTotalItemCount()} productos</h1>
        </div>

        <div className="flex flex-row justify-center gap-4">
          <button className="btn" onClick={() => {clearCart()}}><Icon icon="ph:trash-bold" width="30" height="30" />Vaciar</button>

          {/* The button to open modal */}
          <label htmlFor="my-modal" className="btn">Comprar</label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">

              {/* FORMULARIO */}

              <form className="flex flex-col gap-2 w-full" onSubmit={ev => {

                ev.preventDefault()

                setUser({
                  name: (ev.target.name.value + " " + ev.target.lastname.value),
                  phone: ev.target.phone.value,
                  email: ev.target.email.value
                  
                })

                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Información enviada',
                  showConfirmButton: false,
                  timer: 1500,
                  background: "#191D24"
                })

                setHidden(false)
        

              }}>

                <div className="flex gap-2">

                  <input required type="text" name="name" placeholder="Nombre" className="input input-bordered w-full max-w-xs" />
                  <input required type="text" name="lastname" placeholder="Apellido" className="input input-bordered w-full max-w-xs" />

                </div>

                <div className="flex flex-col gap-2">

                  <input required type="text" name="email" placeholder="Ingrese su e-mail" className="input input-bordered w-full w-full" title="Ingrese una dirección de correo válida" pattern="[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?"/>
                  <input required type="text" name="phone" placeholder="Ingrese su número de celular" className="input input-bordered w-full" />

                </div>

                <div className="flex flex-col items-center">
                  <input className="btn" type="submit"/>
                </div>
                

              </form>
              
              <div className="modal-action">
                <label onClick={makeOrder} htmlFor="my-modal" className={hidden ? "hidden" : "btn"}>Comprar</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductCart