import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,useToast 
} from '@chakra-ui/react'
import * as React from 'react'
import { FavouriteButton } from './FavoutiteButton'
import { Link } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import { addToCart } from '../../../Redux/OrderSection/Action/action'
import { store } from '../../../Redux/store'

export const ProductCard = (props) => {
  const dispatch = useDispatch()
  const toast = useToast()
  const user = useSelector((store)=>store.UserReducer.user)
  const { product, rootProps } = props
  const { name, brand, image_link, price, category, product_type, _id } = product
  const handleCart = () => {
    const payload = {
      _id:props.product._id,
      brand:props.product.brand,
      category:props.product.category,
      name:props.product.name,
      price: +props.product.price,
      image_link:props.product.image_link,
      product_type:props.product.product_type,
      user:user[0].username,
      date:new Date().toLocaleString('en-GB', {
        hour12: false,
      }),
      Quantity:1
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
  return (
    <Stack
      spacing={useBreakpointValue({
        base: '4',
        md: '5',
      })}
      {...rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={product?.image_link}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({
              base: 'md',
              md: 'xl',
            })}
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text as='b' fontWeight="lg" color={useColorModeValue('gray.700', 'gray.400')}>
            Brand :- {brand}
          </Text>
          <Text as='b' fontWeight="lg" color={useColorModeValue('gray.700', 'gray.400')}>
            Name :- {name}
          </Text>
          <Text as='b' fontWeight="lg" color={useColorModeValue('gray.700', 'gray.400')}>
            Category :- {category}
          </Text>
          <Text as='b' fontWeight="lg" color={useColorModeValue('gray.700', 'gray.400')}>
            Product-Type :-  {product_type}
          </Text>
          <Text as='b' fontWeight="lg" color={useColorModeValue('gray.700', 'gray.400')}>
            Price - ${price}
          </Text>
        </Stack>
      </Stack>
      <Stack align="center">
        <Button onClick={()=>{handleCart()}} colorScheme="pink" width="full">
          Add to cart
        </Button>
        <Link
          to={`/products/${product._id}`}
          textDecoration="underline"
          fontWeight="lg"
          colour='black'
        >
          More Details
        </Link>
      </Stack>
    </Stack>
  )
}