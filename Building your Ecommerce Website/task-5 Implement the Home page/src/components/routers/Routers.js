import ProductList from "../products/ProductList";
import About from "../layout/About";
import Home from "../layout/Home";
import { Route, Routes } from "react-router-dom";

const routePath = {
  Home: "/",
  Store: "/store",
  About: "/about",
};

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path={routePath.Home} element={<Home />} />
        <Route path={routePath.Store} element={<ProductList />} />
        <Route path={routePath.About} element={<About />} />
      </Routes>
    </div>
  );
};

export default Routers;
