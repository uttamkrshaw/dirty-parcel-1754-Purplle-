import { AspectRatio, Flex, Image, Select, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const ProductItem = (props) => {
  const { product } = props
  console.log("producert",product);
  return (
    <Flex justify="space-between" key={product.id}>
      <Stack direction="row" spacing="5">
        <AspectRatio ratio={1} width="92px">
          <Image src={product.image_link} alt={product.name} borderRadius="md" />
        </AspectRatio>
        <Stack spacing="3">
          <Stack spacing="1">
            <Text fontWeight="semibold">{product.name}</Text>
            <Text color={useColorModeValue('gray.600', 'gray.300')}>Quantity: {product.Quantity}</Text>
          </Stack>
        </Stack>
      </Stack>
      <Text fontWeight="medium">${product.price}</Text>
    </Flex>
  )
}
