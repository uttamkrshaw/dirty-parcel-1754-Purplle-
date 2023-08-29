import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button, useDisclosure, Center, Box, useColorModeValue, Avatar, Heading, Text, Link, Stack, Badge
} from '@chakra-ui/react'
import { useSelector } from "react-redux"

function User_details() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const user = useSelector((store) => store.UserReducer.user)
    return (
        <>
            <Button variant="link" color="pink.400" onClick={onOpen}>User Details</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>USER DETAILS</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Center py={6}>
                            <Box
                                maxW={'320px'}
                                w={'full'}
                                bg={useColorModeValue('white', 'gray.900')}
                                boxShadow={'2xl'}
                                rounded={'lg'}
                                p={6}
                                textAlign={'center'}>
                                <Avatar
                                    size={'xl'}
                                    src={'https://i.pinimg.com/564x/af/db/86/afdb86ee4f4ea150d8f77ecfb4a6da8b.jpg'}
                                    alt={'Avatar Alt'}
                                    mb={4}
                                    pos={'relative'}
                                    _after={{
                                        content: '""',
                                        w: 4,
                                        h: 4,
                                        bg: 'green.300',
                                        border: '2px solid white',
                                        rounded: 'full',
                                        pos: 'absolute',
                                        bottom: 0,
                                        right: 3,
                                    }}
                                />
                                <Heading fontSize={'2xl'} fontFamily={'body'}>
                                    {user[0].username}
                                </Heading>
                                <Text fontWeight={600} color={'gray.500'} mb={4}>
                                    {user[0].email}
                                </Text>
                                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                                    <Badge
                                        px={2}
                                        py={1}
                                        bg={useColorModeValue('gray.50', 'gray.800')}
                                        fontWeight={'400'}>
                                        Age:- {user[0].age}
                                    </Badge>
                                    <Badge
                                        px={2}
                                        py={1}
                                        bg={useColorModeValue('gray.50', 'gray.800')}
                                        fontWeight={'400'}>
                                        Account Type :- {user[0].type}
                                    </Badge>
                                </Stack>

                                <Stack mt={8} direction={'row'} spacing={4}>
                                    <Button
                                        flex={1}
                                        fontSize={'sm'}
                                        rounded={'full'}
                                        _focus={{
                                            bg: 'gray.200',
                                        }}>
                                        Orders
                                    </Button>
                                    <Button
                                        flex={1}
                                        fontSize={'sm'}
                                        rounded={'full'}
                                        bg={'pink.400'}
                                        color={'white'}
                                        boxShadow={
                                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                        }
                                        _hover={{
                                            bg: 'pink.500',
                                        }}
                                        _focus={{
                                            bg: 'pink.500',
                                        }}>
                                        Favourites
                                    </Button>
                                </Stack>
                            </Box>
                        </Center>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default User_details