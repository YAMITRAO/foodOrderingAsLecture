import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import React from "react";


const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    console.log(cartCtx)

    // const numberOfCartItems = cartCtx.items.length;

    return(
        <button className={classes.button} onClick={props.onButtonClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    )

}

export default HeaderCartButton;