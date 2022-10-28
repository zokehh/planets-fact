import { Link } from "react-router-dom"
import Planet from "../components/Planet/Planet"
import classes from './Skipper.module.css'

const Mars = () => {
    return (
        <div>
            <Planet
                name='Mars'
                desc="Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'."
    
                imageOne="https://aginamena.github.io/Planets-fact-site/assets/planet-mars.svg"
                imageTwo="https://aginamena.github.io/Planets-fact-site/assets/planet-mars-internal.svg"
                imageThree="https://aginamena.github.io/Planets-fact-site/assets/geology-mars.png"
                source='https://en.wikipedia.org/wiki/Mars'
    
                rottime='1.03 Days'
                revtime='1.88 Years'
                radius='3,389.5 KM'
                temp='-28°c'
            />
            <Link to='/jupiter' className={classes.toRight}> {">"} </Link>
            <Link to='/earth' className={classes.toLeft}> {"<"} </Link>
        </div>
    )
}

export default Mars