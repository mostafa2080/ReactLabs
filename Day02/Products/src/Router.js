import {Route , Routes} from "react-router-dom";
import Home from "./Pages/Home/home";
import Products from "./Pages/Products/products";
import Product from "./Pages/Product/product";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/product/:id" element={<Product/>}/>
        </Routes>
    )
}

export default Router;