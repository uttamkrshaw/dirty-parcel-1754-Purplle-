import React from "react";
import { Route, Routes  } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import SignUp from "../Pages/Sign-Up";
import SingleProduct from "../Pages/SingleProductPage";
import Product from "../Pages/ProductPage";

function AllRouters(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/products" element={<Product />} />
                <Route path="/products/:_id" element={<SingleProduct />} />
            </Routes>
        </div>
    )
}
export default AllRouters;