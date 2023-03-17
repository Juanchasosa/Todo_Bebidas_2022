import { Link } from "react-router-dom"
import QuantitySelector from "./QuantitySelector"

const ProductCard = ({id, name, stock, precio, img}) => {
  return (
    <>
        <div className="card w-96 bg-base-100 shadow-xl m-2">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">${precio}</h2>
                <p>Stock: {stock}</p>
                <div className="items-center flex-col card-actions">
                    <Link to={`/drink/${id}`} className="btn">Ver detalle</Link>
                </div>
            </div>
        </div>
    </>
  )
}
export default ProductCard


