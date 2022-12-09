import { react, useState } from "react"
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartContext from "./Context/CartContext";
import BackToTop from "./components/BackToTop/BackToTop";
import Routers from "./routes/Routers";

function App() {
  const [item, setItem] = useState([])
  return(
    <CartContext.Provider 
            value={{
                product: item,
                setProduct: setItem
            }}
        >
            <Header/>
                <div>
                    <Routers/>
                </div>
                <BackToTop/>
            <Footer/>
      </CartContext.Provider>
  )
}

export default App;
