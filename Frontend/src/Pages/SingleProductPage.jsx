import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem, SkeletonCircle, SkeletonText, Alert, AlertIcon, useToast
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DefaultNavbar from '../Components/User_Site/Header/Header';
import DefaultFooter from '../Components/User_Site/Footer/Footer';
import { getSingleProductData } from '../Redux/ProductSection/Action/action';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/OrderSection/Action/action';

function SingleProduct() {
    const dispatch = useDispatch();
    const toast = useToast()
    let params = useParams();
    const { isLoading, isError, singleProduct } = useSelector((store) => store.ProductReducer)
    const user = useSelector((store) => store.UserReducer.user)
    const handleCart = () => {
        const payload = {
            _id: singleProduct[0]._id,
            brand: singleProduct[0].brand,
            category: singleProduct[0].category,
            name: singleProduct[0].name,
            price: +singleProduct[0].price,
            image_link: singleProduct[0].image_link,
            product_type: singleProduct[0].product_type,
            user: user[0].username,
            date: new Date().toLocaleString('en-GB', {
                hour12: false,
            }),
            Quantity: 1
        }
        dispatch(addToCart(payload))
        toast({
            title: 'Added To Cart.',
            position: 'top-right',
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
    }

    useEffect(() => {
        dispatch(getSingleProductData(params._id))
    }, [])


    return isLoading ?
        <Box padding='6' boxShadow='lg' bg='white'>
            <SkeletonCircle size='10' />
            <SkeletonText mt='4' noOfLines={10} spacing='5' skeletonHeight='10' />
        </Box>
        :
        isError ? <Alert status='error' >
            <AlertIcon />
            There was an error processing your request
        </Alert>
            : singleProduct.length === 0 ?
                <Box padding='6' boxShadow='lg' bg='white'>
                    <SkeletonCircle size='10' />
                    <SkeletonText mt='4' noOfLines={10} spacing='5' skeletonHeight='10' />
                </Box>
                : <>
                    <div>
                        <div>
                            <DefaultNavbar />
                        </div>
                        <div>
                            <Container maxW={'full'} color='black'>
                                <SimpleGrid
                                    columns={{ base: 1, lg: 2 }}
                                    spacing={{ base: 8, md: 10 }}
                                    py={{ base: 18, md: 24 }}>
                                    <Flex>
                                        <Image
                                            rounded={'md'}
                                            alt={'product image'}
                                            src={singleProduct[0].image_link}
                                            fit={'cover'}
                                            align={'center'}
                                            w={'100%'}
                                            h={{ base: '100%', sm: '400px', lg: '500px' }}
                                        />
                                    </Flex>
                                    <Stack spacing={{ base: 6, md: 10 }}>
                                        <Box as={'header'}>
                                            <Heading
                                                lineHeight={1.1}
                                                fontWeight={600}
                                                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                                {singleProduct[0].name}
                                            </Heading>
                                            <Text
                                                fontWeight={700}
                                                fontSize={'2xl'}>
                                                {singleProduct[0].product_type}
                                            </Text>
                                        </Box>

                                        <Stack
                                            spacing={{ base: 4, sm: 6 }}
                                            direction={'column'}
                                            divider={
                                                <StackDivider
                                                    borderColor={('gray.200', 'gray.600')}
                                                />
                                            }>
                                            <VStack spacing={{ base: 4, sm: 6 }}>
                                                {/* <Text
                                                    color={('gray.500', 'gray.400')}
                                                    fontSize={'2xl'}
                                                    fontWeight={'300'}>
                                                    {singleProduct[0].product_type}
                                                </Text> */}
                                                <Text fontSize={'lg'}>
                                                    {singleProduct[0].description}
                                                </Text>
                                            </VStack>

                                            <Box>
                                                <Text
                                                    fontSize={{ base: '16px', lg: '18px' }}
                                                    color={('pink.600', 'pink.400')}
                                                    fontWeight={'500'}
                                                    textTransform={'uppercase'}
                                                    mb={'4'}>
                                                    Product Details
                                                </Text>

                                                <List spacing={2}>
                                                    <ListItem>
                                                        <Text as={'span'} fontWeight={'bold'}>
                                                            Brand:
                                                        </Text>{' '}
                                                        {singleProduct[0].brand}
                                                    </ListItem>
                                                    <ListItem>
                                                        <Text as={'span'} fontWeight={'bold'}>
                                                            Category:
                                                        </Text>{' '}
                                                        {singleProduct[0].category}
                                                    </ListItem>
                                                    <ListItem>
                                                        <Text as={'span'} fontWeight={'bold'}>
                                                            Name:
                                                        </Text>{' '}
                                                        {singleProduct[0].name}
                                                    </ListItem>
                                                    <ListItem>
                                                        <Text as={'span'} fontWeight={'bold'}>
                                                            Price:
                                                        </Text>{' '}
                                                        ${singleProduct[0].price}
                                                    </ListItem>
                                                    <ListItem>
                                                        <Text as={'span'} fontWeight={'bold'}>
                                                            Rating:
                                                        </Text>{' '}
                                                        {singleProduct[0].rating}
                                                    </ListItem>
                                                    <ListItem>
                                                        <Text as={'span'} fontWeight={'bold'}>
                                                            Product-Type:
                                                        </Text>{' '}
                                                        {singleProduct[0].product_type}
                                                    </ListItem>
                                                </List>
                                            </Box>
                                        </Stack>

                                        <Button
                                            onClick={() => { handleCart() }}
                                            rounded={'none'}
                                            w={'full'}
                                            mt={8}
                                            size={'lg'}
                                            py={'7'}
                                            bg={('pink.600', 'pink.600')}
                                            color={('white', 'gray.900')}
                                            textTransform={'uppercase'}
                                            _hover={{
                                                transform: 'translateY(2px)',
                                                boxShadow: 'lg',
                                            }}>
                                            Add to cart
                                        </Button>

                                        <Stack direction="row" alignItems="center" justifyContent={'center'}>
                                            <MdLocalShipping />
                                            <Text>2-3 business days delivery</Text>
                                        </Stack>
                                    </Stack>
                                </SimpleGrid>
                            </Container>
                        </div>
                        <div>
                            <DefaultFooter />
                        </div>
                    </div>
                </>
}
export default SingleProduct;
