import { useState } from "react"
import { useReducer } from "react"
import classes from './Planet.module.css'
import logo from '../../assets/link1.png'

const Planet = (props) => {
    const [isLoaded, setIsLoaded] = useState(false)

    // checking buttons state

    const reducer = (state, action) => {
    if (action.type === 'FIRST') {
        return (
            <img src={props.imageOne} alt='' />
            )
        }
            
        if (action.type === 'SECOND') {
            return (
                <img src={props.imageTwo} alt='' />
                )
            }
                
        if (action.type === 'THIRD') {
            return (
                <img src={props.imageThree} alt='' />
                )
            }
        }
                
    const [image, dispatch] = useReducer(reducer)

    // styles for the buttons

    const [firstStyles, setFirstStyles] = useState({
        backgroundColor : 'rgb(163, 73, 248)',
        border: '1px solid rgb(163, 73, 248)'
    })

    const [secondStyles, setSecondStyles] = useState({})

    const [thirdStyles, setThirdStyles] = useState({})

    const first = () => {
        dispatch({type : 'FIRST'})
        setIsLoaded(true)

        setFirstStyles({
            backgroundColor : 'rgb(163, 73, 248)',
            border: '1px solid rgb(163, 73, 248)'
        })
        setSecondStyles({})
        setThirdStyles({})
    }

    const second = () => {
        dispatch({type : 'SECOND'})
        setIsLoaded(true)

        setFirstStyles({})
        setSecondStyles({
            backgroundColor : 'rgb(163, 73, 248)',
            border: '1px solid rgb(163, 73, 248)'
        })
        setThirdStyles({})
    }

    const third = () => {
        dispatch({type : 'THIRD'})
        setIsLoaded(true)

        setFirstStyles({})
        setSecondStyles({})
        setThirdStyles({
            backgroundColor : 'rgb(163, 73, 248)',
            border: '1px solid rgb(163, 73, 248)'
        })
    }

    const link = props.source

    return (
        <div className={classes.planet}>
            <div className={classes.top}>
                <div className={classes.topImage}>
                    {!isLoaded && <img src={props.imageOne} alt='' />}
                    {isLoaded && image}
                </div>
                <div className={classes.info}>
                    <div className={classes.infoWrapper}>
                        <h1>{props.name}</h1>
                        <p className={classes.desc}>{props.desc}</p>
                        <p className={classes.source}>Source : <a href={link} rel="noreferrer" target='_blank'>Wikipedia <img src={logo} alt='' /></a></p>
                    </div>
                    <div className={classes.buttons}>
                        <button style={firstStyles} onClick={first}><span>01</span> OVERVIEW</button>
                        <button style={secondStyles} onClick={second}><span>02</span> INTERNAL STRUCTURE</button>
                        <button style={thirdStyles} onClick={third}><span>03</span> SURFACE GEOLOGY</button>
                    </div>
                </div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.bottomContainer}>
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
            </div>
        </div>
    )
}

export default Planet