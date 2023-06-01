import { Icon, IconButton, LightMode, useToast } from '@chakra-ui/react'
import { color } from 'framer-motion'
import * as React from 'react'
import { FiHeart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { addToFav } from '../../../Redux/OrderSection/Action/action'

export const FavouriteButton = (props) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { product } = props
  const user = useSelector((store) => store.UserReducer.user)

  const handleFav = () => {
    const payload = {
      _id: product._id,
      brand:product.brand,
      category:product.category,
      name: product.name,
      price: +product.price,
      image_link: product.image_link,
      product_type: product.product_type,
      user: user[0].username,
      date: new Date().toLocaleString('en-GB', {
        hour12: false,
      }),
      Quantity: 1
    }
    dispatch(addToFav(payload))
    toast({
      title: 'Added To Fav.',
      position: 'top-right',
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }
  return (
    <LightMode>
      <IconButton
        isRound
        bg="white"
        color="gray.900"
        size="sm"
        _hover={{
          transform: 'scale(1.5)',
          bg: "pink",
          color: "red"
        }}
        sx={{
          ':hover > svg': {
            transform: 'scale(1.1)',
          },
        }}
        onClick={handleFav}
        transition="all 0.15s ease"
        icon={<Icon as={FiHeart} transition="all 0.15s ease" />}
        boxShadow="base"
        {...props}
      />
    </LightMode>
  )
}