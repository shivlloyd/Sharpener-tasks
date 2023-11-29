import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/layout/Footer";
import CartProvider from "./components/Store/CartProvider";
import Routers from "./components/routers/Routers";

function App() {
  return (
    <Router>
      <CartProvider>
        <Header></Header>
        <Routers></Routers>
        <Footer></Footer>
      </CartProvider>
    </Router>
  );
}

export default App;
