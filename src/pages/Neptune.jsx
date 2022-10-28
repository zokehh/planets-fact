import { Link } from "react-router-dom"
import Planet from "../components/Planet/Planet"
import classes from './Skipper.module.css'

const Neptune = () => {
    return (
        <div>
            <Planet
                name='Neptune'
                desc="Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus."
    
                imageOne="https://aginamena.github.io/Planets-fact-site/assets/planet-neptune.svg"
                imageTwo="https://aginamena.github.io/Planets-fact-site/assets/planet-neptune-internal.svg"
                imageThree="https://aginamena.github.io/Planets-fact-site/assets/geology-neptune.png"
                source="https://en.wikipedia.org/wiki/Neptune"
    
                rottime='16.08 Hours'
                revtime='164.79 Years'
                radius='24,622 KM'
                temp='-201°c'
            />
            <Link to='/uranus' className={classes.toLeft}> {"<"} </Link>
        </div>
    )
}

export default Neptune