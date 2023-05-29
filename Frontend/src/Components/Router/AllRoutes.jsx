import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import SignUp from "../Pages/Sign-Up";
import SingleProduct from "../Pages/SingleProductPage";
import Product from "../Pages/ProductPage";
import { CartPage } from "../Pages/Cart";
import { Checkout } from "../Pages/Checkout";

function AllRouters() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/products" element={<Product />} />
                <Route path="/products/:_id" element={<SingleProduct />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </div>
    )
}
export default AllRouters;