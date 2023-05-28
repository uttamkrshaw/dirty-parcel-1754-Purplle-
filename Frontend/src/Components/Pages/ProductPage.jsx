import React from "react";
import { Link, useNavigate } from "react-router-dom"
import {
    Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Center, ButtonGroup, Button, Box, Skeleton, SkeletonCircle, SkeletonText, Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription, StackDivider
} from '@chakra-ui/react'
import axios from 'axios';
import DefaultNavbar from "../Mini_Components/User_Site/Header/Header"
import DefaultFooter from "../Mini_Components/User_Site/Footer/Footer";
import { ProductCard } from "../Mini_Components/User_Site/ProductPageComponents/ProductCard";
import { ProductGrid } from "../Mini_Components/User_Site/ProductPageComponents/ProductGrid";
import { useDispatch, useSelector } from "react-redux"
import { getProductData } from "../Redux/ProductSection/Action/action";
import { store } from "../Redux/store";
import { useState, useEffect } from "react";
import { Sidebar } from "../Mini_Components/User_Site/Sidebar/Sidebar";

function Product() {

    const dispatch = useDispatch()
    const token = useSelector((store) => store.UserReducer.token)
    const { products, isLoading, isError } = useSelector((store) => store.ProductReducer)
    const [page, setPage] = useState(1)
    const [load, setLoad] = useState(false)

    const handleLoad = () => {
        setLoad(!load)
    }

    useEffect(() => {
        dispatch(getProductData(page))
    }, [page])

    return (
        isLoading ?
            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={10} spacing='5' skeletonHeight='10' />
            </Box>
            :
            isError ? <Alert status='error' >
                <AlertIcon />
                There was an error processing your request
            </Alert>
                :
                <>
                    <div>
                        <DefaultNavbar handleLoad={handleLoad} />
                    </div>
                    <div>
                        <Stack direction={['column', 'row']} spacing='24px' divider={<StackDivider borderColor='gray.200' />}>

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
                                        {products.map((product) => (
                                            <ProductCard key={product.id} product={product} />
                                        ))}
                                    </ProductGrid>
                                </Box>
                            </Box>
                        </Stack>
                    </div>
                    <div>
                        <Center>
                            <Button onClick={() => setPage(page - 1)}>PREV</Button>
                            <Button disabled>{page}</Button>
                            <Button onClick={() => setPage(page + 1)}>NEXT</Button>
                        </Center>
                    </div >
                </>
    )
}
export default Product;