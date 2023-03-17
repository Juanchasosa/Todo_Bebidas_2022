import { useEffect, useState } from "react"
import {collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore"

const ItemList = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
      getItems()
      // getItemData()

    }, [])

    // const getItemData = () => {
    //     const db = getFirestore()
    //     const docRef = doc(db, "items", "CIPYYk4VkIO9FlUzz54m")
    //     getDoc( docRef ).then (snapshot => {
    //       setItem( {id: snapshot.id, ...snapshot.data()} );
    //     })
      
    //   }
      const getItems = async () => {
        const db = getFirestore()
        const collectionRef = collection(db, "items")
        const snapshot = await getDocs(collectionRef)
        setItems( snapshot.docs.map ( d => ( {id:d.id, ...d.data()})))
      }

  return (
    <>
    {items.map(i => <li>{i.name}</li>)}
    </>
  )
}
export default ItemList