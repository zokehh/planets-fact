import classes from './BottomPlanetInfo.module.css'

const BottomPlanetInfo = (props) => {
    return (
        <div className={classes.container}>
             <div className={classes.rottime}>
                <p>ROTATION TIME</p>
                <h1>{props.rottime}</h1>
            </div>
            <div className={classes.revtime}>
                <p>REVOLUTION TIME</p>
                <h1>{props.revtime}</h1>
            </div>
            <div className={classes.radius}>
                <p>RADIUS</p>
                <h1>{props.radius}</h1>
            </div>
            <div className={classes.temp}>
                <p>AVERAGE TEMP.</p>
                <h1>{props.temp}</h1>
            </div>
        </div>
        
    )
}

export default BottomPlanetInfo