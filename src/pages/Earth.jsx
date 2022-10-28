import { Link } from "react-router-dom"
import Planet from "../components/Planet/Planet"
import classes from './Skipper.module.css'

const Earth = () => {
    return (
        <div>
            <Planet
                name='Earth'
                desc="Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."
    
                imageOne="https://aginamena.github.io/Planets-fact-site/assets/planet-earth.svg"
                imageTwo="https://aginamena.github.io/Planets-fact-site/assets/planet-earth-internal.svg"
                imageThree="https://aginamena.github.io/Planets-fact-site/assets/geology-earth.png"
                source="https://en.wikipedia.org/wiki/Earth#Surface"
    
                rottime='0.99 Days'
                revtime='365.26 Days'
                radius='6,371 KM'
                temp='16°c'
            />
            <Link to='/mars' className={classes.toRight}> {">"} </Link>
            <Link to='/venus' className={classes.toLeft}> {"<"} </Link>
        </div>
    )
}

export default Earth