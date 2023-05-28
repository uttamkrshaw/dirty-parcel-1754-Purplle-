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
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FavouriteButton } from './FavoutiteButton'
import { Link } from 'react-router-dom'

export const ProductCard = (props) => {
  const { product, rootProps } = props
  const { name, brand, image_link, price, category, product_type, id } = product
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
        <Button colorScheme="pink" width="full">
          Add to cart
        </Button>
        <Link
          to={`/products/${product.id}`}
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