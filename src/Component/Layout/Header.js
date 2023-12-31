import melaImages from "../../Assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";


const Header = prosp =>{

    return(
        <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={prosp.onShowCart}/>
        </header>

        <div className={classes['main-image']}>
            <img  src={melaImages} alt="This is an of table with food items"/>
        </div>

        </>
    )
}

export default Header;