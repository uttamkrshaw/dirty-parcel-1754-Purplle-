import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import { formatPrice } from './PriceTag'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
const OrderSummaryItem = (props) => {
  const { label, value, children } = props
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  )
}

export const CartOrderSummary = () => {
  const cart = useSelector((store) => store.OrderReducer.cart)
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  const calTotal = () => {
    let sum = 0;
    cart.map((el) => { sum = sum + (el.price * el.Quantity) })
    setTotal(sum)
  }
  useEffect(() => {
    calTotal()
  })
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(total)} />
        <OrderSummaryItem label="Shipping + Tax">
          <Link href="#" textDecor="underline">
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(total)}
          </Text>
        </Flex>
      </Stack>
      <Button onClick={()=>{navigate("/checkout")}} colorScheme="pink" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
        Checkout
      </Button>
    </Stack>
  )
}