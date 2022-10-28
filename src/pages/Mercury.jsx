import { Link } from "react-router-dom"
import Planet from "../components/Planet/Planet"
import classes from './Skipper.module.css'

const Mercury = () => {
    return (
        <div>
            <Planet
                name='Mercury'
                desc="Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth. "
    
                imageOne="https://aginamena.github.io/Planets-fact-site/assets/planet-mercury.svg"
                imageTwo="https://aginamena.github.io/Planets-fact-site/assets/planet-mercury-internal.svg"
                imageThree="https://aginamena.github.io/Planets-fact-site/assets/geology-mercury.png"
                source='https://en.wikipedia.org/wiki/Mercury_(planet)'
    
                rottime='58.6 Days'
                revtime='87.97 Days'
                radius='2,439.7 KM'
                temp='430°c'
            />
            <Link to='/venus' className={classes.toRight}> {">"} </Link>
        </div>
    )
}

export default Mercury