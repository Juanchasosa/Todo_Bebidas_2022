import React, { useContext, useState } from "react"

const CartContext = React.createContext({
    items : [],
    addToCart : () => {},
    clearCart : () => {},
    removeItem : () => {},
    getTotalPrice: () => {},
    getTotalItemCount: () => {}
})

//HOOK PARA USAR EL CARRITO
const useCart = () => {
    return useContext( CartContext )
}



//COMPONENTE PROVIDER
const CartContextProvider = ( {children} ) => {

    const [items, setItems] = useState([])
    console.log(items);

    //FUNCIONES DE AGREGAR AL CARRITO

    const isInCart = (id) => items.find((item) => item.id === id)


    const addToCart = ( item, cantidad  ) => {
        if (isInCart(item.id)) {
            setItems(items.map(producto => {
                return producto.id === item.id ? {...producto, cantidad: producto.cantidad + cantidad} : producto
            }))
            
        } else{
            setItems([...items, {...item, cantidad}])
        }
 
    }

    //FUNCIONES DE BORRAR AL CARRITO
    //Borra el carrito completo
    const clearCart = () => {
        setItems( [] )
    }

    //Borra elemento específico

    const removeItem = (idToRemove) => {
        let newCart = items.filter(itemInCart => itemInCart.id !== idToRemove)
        setItems([...newCart])
    }

    const getTotalPrice = () =>{
        return items.reduce((prev, act) => prev + act.cantidad * act.precio, 0)
    }

    const getTotalItemCount = () =>{
        return items.reduce((acc, product) => acc + product.cantidad, 0)
    }

    const context = {
        items : items,
        addToCart : addToCart,
        clearCart : clearCart,
        removeItem: removeItem,
        getTotalPrice: getTotalPrice,
        getTotalItemCount: getTotalItemCount
    }

  return (
    <CartContext.Provider value={context}>
        {children}
    </CartContext.Provider>
  )
}
export {CartContext, CartContextProvider, useCart}