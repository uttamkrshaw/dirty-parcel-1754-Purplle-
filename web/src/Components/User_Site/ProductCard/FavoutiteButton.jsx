import { Icon, IconButton, LightMode, useToast } from '@chakra-ui/react'
import { color } from 'framer-motion'
import * as React from 'react'
import { FiHeart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { addToFav } from '../../../Redux/OrderSection/Action/action'

export const FavouriteButton = (props) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const user = useSelector((store) => store.UserReducer.user)
  const handleFav = () => {
    const payload = {
      _id: props._id,
      brand:props.brand,
      category:props.category,
      name: props.name,
      price: +props.price,
      image_link: props.image_link,
      product_type: props.product_type,
      user: user[0].username,
      date: new Date().toLocaleString('en-GB', {
        hour12: false,
      }),
      Quantity: 1
    }
    console.log("payload",payload);
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