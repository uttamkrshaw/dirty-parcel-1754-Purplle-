import {
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiOutlineChat, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { ProductItem } from './ProductItem'
import { useDispatch, useSelector } from "react-redux"
import { addUserOrders, updateUserOrderList } from '../../../Redux/UserSection/Action/action'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = (props) => {
  const { shipping } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { cart, fav, userorder } = useSelector((store) => store.OrderReducer)
  const user = useSelector((store) => store.UserReducer.user)
  const [total, setTotal] = React.useState(0)
  const calTotal = () => {
    let sum = 0;
    cart.map((el) => { sum = sum + (el.price * el.Quantity) })
    setTotal(sum)
  }
  const handleOrder = () => {
    dispatch(addUserOrders([...cart]))
    navigate("/products")
  }
  React.useEffect(() => {
    calTotal()
  })
  return (
    <Stack
      spacing={{
        base: '6',
        md: '10',
      }}
    >
      <Heading size="md">Order Summary</Heading>
      <Stack spacing="8">
        <Stack spacing="6">
          {cart.map((product) => (
            <>
              <ProductItem key={product._id} product={product} />
              <Divider />
            </>
          ))}
        </Stack>

        {/*
        Discount  Copoun
        <HStack spacing="6">
          <Input
            name="discount"
            placeholder="Discount Code"
            focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
            bg={useColorModeValue('white', 'gray.700')}
            size="lg"
          />
          <Button
            size="lg"
            px="8"
            bg={useColorModeValue('gray.500', 'gray.600')}
            _hover={{
              bg: useColorModeValue('gray.600', 'gray.500'),
            }}
            _active={{
              bg: useColorModeValue('gray.700', 'gray.500'),
            }}
            color="white"
          >
            Apply
          </Button>
        </HStack> */}
        <Stack spacing="6">
          <Stack spacing="3">
            <Stack direction="row" justify="space-between">
              <Text color={useColorModeValue('gray.600', 'gray.300')}>Subtotal</Text>
              <Text color={useColorModeValue('black', 'white')}>${total}</Text>
            </Stack>
            <Stack direction="row" justify="space-between">
              <Text color={useColorModeValue('gray.600', 'gray.300')}>Shipping cost</Text>
              <Text color={useColorModeValue('black', 'white')}>+${shipping}</Text>
            </Stack>
            <Stack direction="row" justify="space-between">
              <Text color={useColorModeValue('gray.600', 'gray.300')}>Discount (10%)</Text>
              <Text color={useColorModeValue('blue.500', 'blue.200')}>-${Math.round(total * 0.1)}</Text>
            </Stack>
          </Stack>
          <Divider />
          <Stack direction="row" justify="space-between">
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color={useColorModeValue('gray.700', 'gray.200')}
            >
              Order Total
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color={useColorModeValue('black', 'white')}>
              ${total + +shipping - (total * 0.1)}
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing="8">
        <Button onClick={() => { handleOrder() }} colorScheme="pink" size="lg" py="7">
          Place Order
        </Button>
        <Stack spacing="3">
          <Text fontSize="sm" color={useColorModeValue('pink.700', 'gray.200')}>
            Have questions? or Need help to complete your order?
          </Text>
          <HStack
            spacing="8"
            color={useColorModeValue('pink.500', 'blue.200')}
            fontWeight="semibold"
          >
            <HStack>
              <Icon as={HiOutlineChat} boxSize="5" />
              <Text>Live Chat</Text>
            </HStack>
            <HStack>
              <Icon as={HiOutlinePhone} boxSize="5" />
              <Text>Phone</Text>
            </HStack>
            <HStack>
              <Icon as={HiOutlineMail} boxSize="5" />
              <Text>Email</Text>
            </HStack>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  )
}