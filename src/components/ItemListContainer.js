import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { PRODUCTS } from "../data/drinks"
import Loader from "./Loader"
import ProductCard from "./ProductCard"


const ItemListContainer = () => {

   
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {idCategory} = useParams()
    
    useEffect(() => {

        idCategory ? getItemsCategory() : getItems()

    }, [idCategory])
    

    const getItems = async () => {  
        const dataBase= getFirestore()
        const collectionRef = collection (dataBase, 'items')
        const snapshot = await getDocs(collectionRef)
        setProducts(snapshot.docs.map(d => ({id:d.id, ...d.data()}))) 
        setLoading(false)  
    }

    const getItemsCategory = async () => {  
        const dataBase= getFirestore()
        const collectionRef = query(collection(dataBase,"items"),where('category','==',idCategory))
        const snapshot = await getDocs(collectionRef)
        setProducts(snapshot.docs.map(d => ({id:d.id, ...d.data()  } )))   
        setLoading(false)
    }
    
    

    
    
  return (
    loading ? <Loader/> :

    <>
        <div className="flex flex-col items-center flex-wrap">

            <div className="flex flex-row flex-wrap justify-evenly">
                {products.map(p => <ProductCard key={p.id} {...p}/> )}
            </div>

        </div>
       
    </>
  )
}

export default ItemListContainer

/* const getCharacters = async () =>{
        const URL = "https://rickandmortyapi.com/api/character"
        try {
            const data = await fetch(URL)
            const characters = await data.json()
            console.log(characters);

        } catch (error) {
            console.log(error);
        }
    } */

/*     const randomPromise = () => {
        const promiseExample = new Promise((resolve, reject) => {
            const random = Math.random()
            console.log(random);
            if (random > 0.5) {
                resolve("Se resolvió correctamente")
                
            }
            reject("RECHAZADA")
        })

        promiseExample.then ((resolve) => {
            console.log("RESPUESTA ", resolve);
        }).catch((err)=>{
            console.log(err);
        })
    } */

    /* const getCharacters = async () => {
        const URL = "https://rickandmortyapi.com/api/character"
        try {
            const response = await fetch(URL);
            const characters = await response.json();  
            console.log(characters);
        } catch (reject) {
            console.log(reject); 
        }
    
    }; */
