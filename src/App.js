import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import { useState } from "react";
import CartProvider from "./Store/CartProvider";

function App() {

  const[cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () =>{
    setCartIsShow(true);
    console.log("Ture is clicked")
  }

  const hideCartHandler = () =>{
    setCartIsShow(false);
  }

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
     <Header onShowCart={showCartHandler}/>
     <main>
      <Meals />
     </main>
    </CartProvider>
  );
}

export default App;
