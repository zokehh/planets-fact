import { Link } from "react-router-dom"
import classes from './Welcome.module.css'

const Welcome = () => {
    return (
        <div className={classes.container}>
            <h1>Welcome to The Planets!</h1>
            <p>I'm here your guide and I will tell you about our solar system!</p>
            <Link to='/mercury'>Let's get started!</Link>
        </div>
    )
}

export default Welcome