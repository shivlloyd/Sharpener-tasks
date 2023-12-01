import ProductList from "../products/ProductList";
import About from "../layout/About";
import Home from "../layout/Home";
import ContactUs from "../layout/ContactUs";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../products/ProductPage";

export const routePath = {
  Home: "/",
  Store: "/store",
  About: "/about",
  ContactUs: "/contact-us",
  ProductPage: "/store/product",
};

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path={routePath.Home} element={<Home />} />
        <Route path={routePath.Store} element={<ProductList />} />
        <Route path={routePath.ProductPage} element={<ProductPage />} />
        <Route path={routePath.About} element={<About />} />
        <Route path={routePath.ContactUs} element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default Routers;
