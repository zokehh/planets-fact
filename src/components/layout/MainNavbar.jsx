import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './MainNavbar.module.css'

const MainNavbar = () => {
    const [isShown, setIsShown] = useState(false)

    const burgerClickHandler = () => {
        setIsShown(prevState => !prevState)
    }

    return (
        <header className={classes.header}>
            <Link className={classes.logo} to='/welcome'>THE PLANETS</Link> 
            <div onClick={burgerClickHandler} className={classes.burger}>
                <span className={classes.line}></span>
                <span className={classes.line}></span>
                <span className={classes.line}></span>
            </div>  
            <nav className={isShown ? "" : classes.opened}>
                <ul>
                    <li><NavLink className={(navData) => navData.isActive ? classes.activeMercury : ''} to='/mercury'>MERCURY</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? classes.activeVenus : ''} to='/venus'>VENUS</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? classes.activeEarth : ''} to='/earth'>EARTH</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? classes.activeMars : ''} to='/mars'>MARS</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? classes.activeJupiter : ''} to='/jupiter'>JUPITER</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? classes.activeSaturn : ''} to='/saturn'>SATURN</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? classes.activeUranus : ''} to='/uranus'>URANUS</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? classes.activeNeptune : ''} to='/neptune'>NEPTUNE</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavbar