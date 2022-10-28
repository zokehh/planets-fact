import classes from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.h1}>Oh no!</h1>
            <p className={classes.p}>This page does not exist!</p>
        </div>
    )
}

export default NotFound