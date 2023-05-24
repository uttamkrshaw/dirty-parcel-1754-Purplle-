import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box } from '@chakra-ui/react'
import axios from 'axios';
import DefaultNavbar from "../Mini_Components/User_Site/Header/Header"
import DefaultFooter from "../Mini_Components/User_Site/Footer/Footer";
import { ProductCard } from "../Mini_Components/User_Site/ProductPageComponents/ProductCard";
import { ProductGrid } from "../Mini_Components/User_Site/ProductPageComponents/ProductGrid";
import { useDispatch, useSelector } from "react-redux"
import { getProductData } from "../Redux/ProductSection/Action/action";
import { store } from "../Redux/store";
import { useState } from "react";

function Product() {

    const dispatch = useDispatch()
    const token = useSelector((store) => store.UserReducer.token)
    const products = useSelector((store) => store.ProductReducer.products)

    const [product, setProduct] = useState(products)
    const [page,setPage]=useState(10)

    React.useEffect(() => {
        dispatch(getProductData(page))
    }, [])

    return (
        //loading ? <h1>Ruko Jara Sabar Karo</h1> : error ? <h1>Ruka Bhai Phr ja aur check kara sb</h1> :
        <>
            <div>
                <DefaultNavbar />
            </div>
            <div>
                <Box >
                    <Box
                        maxW="7xl"
                        mx="auto"
                        px={{
                            base: '4',
                            md: '8',
                            lg: '12',
                        }}
                        py={{
                            base: '6',
                            md: '8',
                            lg: '12',
                        }}
                    >
                        <ProductGrid>
                            {product.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </ProductGrid>
                    </Box>
                </Box>
            </div>

        </>
    )
}
export default Product;