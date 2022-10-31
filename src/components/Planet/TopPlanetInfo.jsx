import { useEffect } from "react"
import { useReducer, useState } from "react"
import classes from './TopPlanetInfo.module.css'


function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth])

    useEffect(() => {
        const resizeHandler = () => {
            setSize([window.innerWidth])
        }
        window.addEventListener('resize', resizeHandler)
        return () => {
            window.addEventListener('resize', resizeHandler)
        }
    }, [])
    return size
}


const TopPlanetInfo = (props) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [width] = useWindowSize()
    const [isFirstClicked, setIsFirstClicked] = useState(true)
    const [isSecondClicked, setIsSecondClicked] = useState(false)
    const [isThirdClicked, setIsThirdClicked] = useState(false)
    
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

    const first = () => {
        dispatch({type : 'FIRST'})
        setIsLoaded(true)

        setIsFirstClicked(true)
        setIsSecondClicked(false)
        setIsThirdClicked(false)
    }

    const second = () => {
        dispatch({type : 'SECOND'})
        setIsLoaded(true)

        setIsFirstClicked(false)
        setIsSecondClicked(true)
        setIsThirdClicked(false)
    }

    const third = () => {
        dispatch({type : 'THIRD'})
        setIsLoaded(true)

        setIsFirstClicked(false)
        setIsSecondClicked(false)
        setIsThirdClicked(true)
    }

    const link = props.source

    return (
        <div className={classes.container}>
            <div className={classes.topImage}>
                {!isLoaded && <img src={props.imageOne} alt='' />}
                {isLoaded && image}
            </div>

                <div className={classes.info}>
                    <h1>{props.name}</h1>
                    <p className={classes.desc}>{props.desc}</p>
                    <p className={classes.source}>Source : <a href={link} rel="noreferrer" target='_blank'>Wikipedia</a></p>
                </div>

                <div className={classes.buttons}>
                    <button className={isFirstClicked ? classes.buttonActive : classes.button} onClick={first}>
                        {width > 810 ? <p><span>01</span>OVERVIEW</p> : <p>OVERVIEW</p>}
                        </button>
                    <button className={isSecondClicked ? classes.buttonActive : classes.button} onClick={second}>
                        {width > 810 ? <p><span>02</span>INTERNAL STRUCTURE</p> : <p>STRUCTURE</p>}
                        </button>
                    <button className={isThirdClicked ? classes.buttonActive : classes.button} onClick={third}>
                        {width > 810 ? <p><span>03</span>SURFACE GEOLOGY</p> : <p>SURFACE</p>}
                        </button>
                </div>
        </div>
    )
}

export default TopPlanetInfo