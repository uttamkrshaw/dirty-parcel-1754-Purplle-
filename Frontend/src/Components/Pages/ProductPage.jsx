import React from "react";
import { Link, useNavigate } from "react-router-dom"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    Center,
    ButtonGroup,
    Button,
    Box,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    StackDivider
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
import { updateUserOrderList } from "../Redux/UserSection/Action/action";

function Product() {

    const dispatch = useDispatch();
    const {
        products,
        isLoading,
        isError,
        brand,
        category,
        product,
        tag
    } = useSelector((store) => store.ProductReducer)

    const {userorder,fav} = useSelector((store) => store.OrderReducer)

    if (userorder.length > 0) {
        localStorage.setItem("userorder", JSON.stringify(userorder))
        localStorage.setItem("fav", JSON.stringify(fav))
        const payload={
            userorder,
            fav
        }
        updateUserOrderList(payload)
    }

    const [page, setPage] = useState(1)

    useEffect(() => {
        if (brand === "" && category === "" && tag === "" && product === "") {
            dispatch(getProductData(page))
        }
    }, [page, category, brand, tag, product])

    return (isLoading ? <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4'
            noOfLines={20}
            spacing='10'
            skeletonHeight='10' />
    </Box> : isError ? <Alert status='error'>
        <AlertIcon />
        There was an error processing your request
    </Alert> : <>
        <div>
            <DefaultNavbar />
        </div>

        <div>
            <Stack direction={['column', 'row']}
                p={10}
                divider={
                    <StackDivider borderColor='gray.200' />
                } spacing={8}>
                <Sidebar />
                <Box margin={'auto'}>
                    <Box maxW="6xl" mx="auto"
                        px={
                            {
                                base: '4',
                                md: '8',
                                lg: '12',
                                xl: '15'
                            }
                        }
                        py={
                            {
                                base: '6',
                                md: '8',
                                lg: '12',
                                xl: '15'
                            }
                        }>
                        <ProductGrid> {
                            products.map((product) => (
                                <ProductCard key={
                                    product.id
                                }
                                    product={product} />
                            ))
                        } </ProductGrid>
                    </Box>
                </Box>
            </Stack>
        </div>
        <div>
            {(brand === "" && category === "" && tag === "" && product === "") ?
                <Center>
                    <Button onClick={
                        () => setPage(page - 1)
                    }>PREV</Button>
                    <Button disabled>
                        {page}</Button>
                    <Button onClick={
                        () => setPage(page + 1)
                    }>NEXT</Button>
                </Center>
                : null}
        </div>
    </>
    )
}
export default Product;
