import { Link } from "react-router-dom"
import Planet from "../components/Planet/Planet"
import classes from './Skipper.module.css'

const Venus = () => {
    return (
        <div>
            <Planet
                name='Venus'
                desc="Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight."
    
                imageOne="https://aginamena.github.io/Planets-fact-site/assets/planet-venus.svg"
                imageTwo="https://aginamena.github.io/Planets-fact-site/assets/planet-venus-internal.svg"
                imageThree="https://aginamena.github.io/Planets-fact-site/assets/geology-venus.png"
    
                source="https://en.wikipedia.org/wiki/Venus#Surface_geology"
    
                rottime='243 Days'
                revtime='224.7 Days'
                radius='6,051.8 KM'
                temp='471°c'
            />
            <Link to='/earth' className={classes.toRight}> {">"} </Link>
            <Link to='/mercury' className={classes.toLeft}> {"<"} </Link>
        </div>
    )
}

export default Venus