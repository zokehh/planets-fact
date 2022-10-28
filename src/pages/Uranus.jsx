import { Link } from "react-router-dom"
import Planet from "../components/Planet/Planet"
import classes from './Skipper.module.css'

const Uranus = () => {
    return (
        <div>
            <Planet
                name='Uranus'
                desc="Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
    
                imageOne="https://aginamena.github.io/Planets-fact-site/assets/planet-uranus.svg"
                imageTwo="https://aginamena.github.io/Planets-fact-site/assets/planet-uranus-internal.svg"
                imageThree="https://aginamena.github.io/Planets-fact-site/assets/geology-uranus.png"
                source="https://en.wikipedia.org/wiki/Uranus"
    
                rottime='17.2 Hours'
                revtime='84 Years'
                radius='25,362 KM'
                temp='-195°c'
            />
            <Link to='/neptune' className={classes.toRight}> {">"} </Link>
            <Link to='/saturn' className={classes.toLeft}> {"<"} </Link>
        </div>
    )
}

export default Uranus