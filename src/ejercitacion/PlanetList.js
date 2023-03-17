import { useState } from "react"
import { useEffect } from "react"
import PlanetCard from "./PlanetCard"

const PlanetList = () => {

    const [planets, setPlanets] = useState( [] )

    useEffect(() => {

        getPlanets()

    },[])

    const getPlanets = () => {

        const URL = "https://rickandmortyapi.com/api/location"
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setPlanets( data.results )
            })
            
        }

    console.log(planets);
        
  return (
    <>
        <div className="flex flex-wrap flex-row justify-around">
            {planets.map(planet =>  <PlanetCard key={planet.id} {...planet}/>)}
        </div>
    </>
  )
}
export default PlanetList