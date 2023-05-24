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
    ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DefaultNavbar from '../Mini_Components/User_Site/Header/Header';
import DefaultFooter from '../Mini_Components/User_Site/Footer/Footer';

function SingleProduct() {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    let params = useParams();


    function getData(id) {
        return axios.get(`http://localhost:3004/products/${id}`)
    }

    const fetchHandleData = (products_id) => {
        setLoading(true);
        getData(products_id)
            .then((input) => setData(input.data))
            .catch((error) => setErr(true))
            .finally(() => setLoading(false));

    }

    useEffect(() => {
        fetchHandleData(params.products_id);
    }, [params.products_id])

    console.log("params", params);
    console.log('data', data);
    //console.log("data",data)

    return loading ? <h1>RUKA BHAI</h1> : err ? <h1>WAPAS CHALA</h1> :
        <div>
            <div>
                <DefaultNavbar />
            </div>
            <div>
                <Container maxW={'full'} bg="#EEEEEE" color='black'>
                    <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 18, md: 24 }}>
                        <Flex>
                            <Image
                                rounded={'md'}
                                alt={'product image'}
                                src={data.image_link}
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
                                    {data.name}
                                </Heading>
                                <Text
                                    color={('gray.900', 'gray.400')}
                                    fontWeight={300}
                                    fontSize={'2xl'}>
                                    ${data.price}
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
                                        {data.product_type}  
                                      </Text> */}
                                    <Text fontSize={'lg'}>
                                        {data.description}
                                    </Text>
                                </VStack>

                                <Box>
                                    <Text
                                        fontSize={{ base: '16px', lg: '18px' }}
                                        color={('yellow.500', 'yellow.300')}
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
                                            {data.brand}
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Category:
                                            </Text>{' '}
                                            {data.category}
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Name:
                                            </Text>{' '}
                                            {data.name}
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Price:
                                            </Text>{' '}
                                            {data.price}
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Rating:
                                            </Text>{' '}
                                            {data.rating}
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Product-Type:
                                            </Text>{' '}
                                            {data.product_type}
                                        </ListItem>
                                    </List>
                                </Box>
                            </Stack>

                            <Button
                                rounded={'none'}
                                w={'full'}
                                mt={8}
                                size={'lg'}
                                py={'7'}
                                bg={('gray.900', 'gray.50')}
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
}
export default SingleProduct;
