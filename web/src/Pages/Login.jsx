import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
    FormControl,
    FormLabel,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react';
import {
    useToast
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux"

import { useState } from 'react';

import axios from "axios";

import { userData, userToken } from "../Redux/UserSection/Action/action"

// importing link for navigation 
import { Link as RouterLink, useNavigate } from 'react-router-dom';



const avatars = [
    {
        name: 'Ryan Florence',
        url: 'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/548/original/open-uri20171223-4-1oykkjg?1514062155',
    },
    {
        name: 'Segun Adebayo',
        url: 'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/254/original/open-uri20171223-4-tjb63?1514063317',
    },
    {
        name: 'Kent Dodds',
        url: 'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/165/original/data?1514062273',
    },
    {
        name: 'Prosper Otemuyiwa',
        url: 'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/047/original/open-uri20180708-4-e7idod?1531087336',
    },
    {
        name: 'Christian Nwamba',
        url: 'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/649/original/open-uri20171223-4-10cz7j2?1514062288',
    },
];

export default function Login() {

    // to toggle authentication status 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((store) => store.UserReducer.user)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const toast = useToast();
    const handleLogin = () => {
        const payload = {
            username,
            password
        }
        axios({
            method: "post",
            url: "https://shy-mittens-mite.cyclic.app/users/login",
            data: payload
        }).then((res) => {
            toast({
                title: "Login Successful!",
                description: res.data.msg,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            dispatch(userToken(res.data.token))
            dispatch(userData(res.data.user))
            navigate("/")
        }).catch((err) => {
            toast({
                title: "Account created!",
                description: err.response.data,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        })

    }


    return (
        <Box position={'relative'}>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}>
                <Stack spacing={{ base: 10, md: 20 }}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                        Login With Your Credentials {' '}
                        <Text
                            as={'span'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            bgClip="text">
                            &
                        </Text>{' '}
                        Get Amazing Offers on Our Products.
                    </Heading>
                    <Stack direction={'row'} spacing={4} align={'center'}>
                        <AvatarGroup>
                            {avatars.map((avatar) => (
                                <Avatar
                                    key={avatar.name}
                                    name={avatar.name}
                                    src={avatar.url}
                                    size={{ base: 'md', md: 'lg' }}
                                    position={'relative'}
                                    zIndex={2}
                                    _before={{
                                        content: '""',
                                        width: 'full',
                                        height: 'full',
                                        rounded: 'full',
                                        transform: 'scale(1.125)',
                                        bgGradient: 'linear(to-bl, red.400,pink.400)',
                                        position: 'absolute',
                                        zIndex: -1,
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                            ))}
                        </AvatarGroup>
                        <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                            +
                        </Text>
                        <Flex
                            align={'center'}
                            justify={'center'}
                            fontFamily={'heading'}
                            fontSize={{ base: 'sm', md: 'lg' }}
                            bg={'gray.800'}
                            color={'white'}
                            rounded={'full'}
                            minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
                            minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
                            position={'relative'}
                            _before={{
                                content: '""',
                                width: 'full',
                                height: 'full',
                                rounded: 'full',
                                transform: 'scale(1.125)',
                                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                                position: 'absolute',
                                zIndex: -1,
                                top: 0,
                                left: 0,
                            }}>
                            YOU
                        </Flex>
                    </Stack>
                </Stack>
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={4}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                            Jaldi se Id dikhao Warna Pachtao
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text">
                                ?
                            </Text>
                        </Heading>
                        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                            Enter your user detals to get access to our products & limited offers.
                        </Text>
                    </Stack>
                    <Box as={'form'} mt={10}>
                        <Stack spacing={4}>
                            <FormControl mt="2%">
                                <FormLabel htmlFor="username" fontWeight={'normal'}>
                                    User Name
                                </FormLabel>
                                <Input id="email" type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                            </FormControl>

                            <FormControl>
                                <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
                                    Password
                                </FormLabel>
                                <InputGroup size="md">
                                    <Input
                                        pr="4.5rem"
                                        type={show ? 'text' : 'password'}
                                        placeholder="Enter password"
                                        value={password} onChange={(e) => { setPassword(e.target.value) }}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>

                        </Stack>
                        <Button
                            onClick={handleLogin}
                            fontFamily={'heading'}
                            mt={8}
                            w={'full'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            color={'white'}
                            _hover={{
                                bgGradient: 'linear(to-r, red.400,pink.400)',
                                boxShadow: 'xl',
                            }}>
                            Submit
                        </Button>
                        <RouterLink to='/signUp'>
                            <Button
                                fontFamily={'heading'}
                                mt={8}
                                w={'full'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                color={'white'}
                                _hover={{
                                    bgGradient: 'linear(to-r, red.400,pink.400)',
                                    boxShadow: 'xl',
                                }}>
                                Create a new Account!
                            </Button>
                        </RouterLink>
                    </Box>
                    form
                </Stack>
            </Container>
            <Blur
                position={'absolute'}
                top={-10}
                left={-10}
                style={{ filter: 'blur(70px)' }}
            />
        </Box>
    );
}

export const Blur = (props: IconProps) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    );
};