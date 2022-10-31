import BottomPlanetInfo from './BottomPlanetInfo'
import classes from './Planet.module.css'
import TopPlanetInfo from './TopPlanetInfo'

const Planet = (props) => {
    return (
        <div className={classes.planet}>
           <TopPlanetInfo
                name={props.name}
                desc={props.desc}

                imageOne={props.imageOne}
                imageTwo={props.imageTwo}
                imageThree={props.imageThree}
                source={props.source}
            />
           <BottomPlanetInfo 
                rottime={props.rottime}
                revtime={props.revtime}
                radius={props.radius}
                temp={props.temp}
           />
        </div>
    )
}

export default Planet