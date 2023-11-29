import "./App.css";
import Header from "./components/Header";
import CartProvider from "./components/Store/CartProvider";
import ProductList from "./components/products/ProductList";

function App() {
  return (
    <CartProvider>
      <Header></Header>
      <ProductList></ProductList>
    </CartProvider>
  );
}

export default App;
