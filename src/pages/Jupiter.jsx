import { Link } from "react-router-dom"
import Planet from "../components/Planet/Planet"
import classes from './Skipper.module.css'

const Jupiter = () => {
    return (
        <div>
            <Planet
                name='Jupiter'
                desc="Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun."
    
                imageOne="https://aginamena.github.io/Planets-fact-site/assets/planet-jupiter.svg"
                imageTwo="https://aginamena.github.io/Planets-fact-site/assets/planet-jupiter-internal.svg"
                imageThree="https://aginamena.github.io/Planets-fact-site/assets/geology-jupiter.png"
                source="https://en.wikipedia.org/wiki/Jupiter"
    
                rottime='9.93 Hours'
                revtime='11.86 Years'
                radius='69,911 KM'
                temp='-108°c'
            />
            <Link to='/saturn' className={classes.toRight}> {">"} </Link>
            <Link to='/mars' className={classes.toLeft}> {"<"} </Link>
        </div>
    )
}

export default Jupiter