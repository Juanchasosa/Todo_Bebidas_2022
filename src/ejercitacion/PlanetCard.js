const PlanetCard = ({id, name, type, dimension}) => {
  return (

    
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                <div className="badge badge-secondary">{type}</div>
                </h2>
                <p>{dimension}</p>
            <div className="card-actions justify-end">
                <div className="badge badge-outline">{id}</div> 
            </div>
        </div>
       </div>
    
  )
}
export default PlanetCard