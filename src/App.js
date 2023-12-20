import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";

function App() {
  return (
    <div>
      
     <Header />
     <main>
      <Meals />
     </main>

     <Cart />
    </div>
  );
}

export default App;
