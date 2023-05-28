import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { CartOrderSummary } from '../Mini_Components/User_Site/CartPageComponents/CartOrderSummary'
import { CartItem } from '../Mini_Components/User_Site/CartPageComponents/CartItem'
import DefaultNavbar from '../Mini_Components/User_Site/Header/Header'
import DefaultFooter from '../Mini_Components/User_Site/Footer/Footer'


export const CartPage = () => {
  const cart = useSelector((store) => store.OrderReducer.cart)
  localStorage.setItem("cart", JSON.stringify(cart))
  return <>
    <DefaultNavbar />
    <Box
      maxW={{
        base: '3xl',
        lg: '7xl',
      }}
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
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        align={{
          lg: 'flex-start',
        }}
        spacing={{
          base: '8',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            md: '10',
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart ({cart.length} items)
          </Heading>

          <Stack spacing="6">
            {cart.map((item) => (
              <CartItem key={item._id} {...item} />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
    <DefaultFooter />
  </>
}