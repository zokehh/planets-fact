import { Link } from "react-router-dom"
import Planet from "../components/Planet/Planet"
import classes from './Skipper.module.css'

const Saturn = () => {
    return (
        <div>
            <Planet
                name='Saturn'
                desc="Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth."
    
                imageOne="https://aginamena.github.io/Planets-fact-site/assets/planet-saturn.svg"
                imageTwo="https://aginamena.github.io/Planets-fact-site/assets/planet-saturn-internal.svg"
                imageThree="https://aginamena.github.io/Planets-fact-site/assets/geology-saturn.png"
                source="https://en.wikipedia.org/wiki/Saturn"
    
                rottime='10.8 Hours'
                revtime='29.46 Years'
                radius='58,232 KM'
                temp='-138°c'
            />
            <Link to='/uranus' className={classes.toRight}> {">"} </Link>
            <Link to='/jupiter' className={classes.toLeft}> {"<"} </Link>
        </div>
    )
}

export default Saturn