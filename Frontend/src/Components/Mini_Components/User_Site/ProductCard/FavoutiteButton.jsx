import { Icon, IconButton, LightMode } from '@chakra-ui/react'
import { color } from 'framer-motion'
import * as React from 'react'
import { FiHeart } from 'react-icons/fi'

export const FavouriteButton = (props) => (
  <LightMode>
    <IconButton
      isRound
      bg="white"
      color="gray.900"
      size="sm"
      _hover={{
        transform: 'scale(1.5)',
        bg:"pink",
        color:"red"
      }}
      sx={{
        ':hover > svg': {
          transform: 'scale(1.1)',
        },
      }}
      transition="all 0.15s ease"
      icon={<Icon as={FiHeart} transition="all 0.15s ease" />}
      boxShadow="base"
      {...props}
    />
  </LightMode>
)