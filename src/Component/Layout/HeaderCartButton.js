import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import React from "react";


const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    console.log(cartCtx);
    console.log(cartCtx.items);
  
    const numberOfCartItems = cartCtx.items.reduce( (curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    // const numberOfCartItems = cartCtx.items.length;

    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )

}

export default HeaderCartButton;