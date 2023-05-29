import {
  Box,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'

export const ShippingMethod = () => {
  const [shipping, setShipping] = React.useState(5)
  console.log("shipping",shipping)
  return <>
    <Stack
      spacing={{
        base: '6',
        md: '10',
      }}
    >
      <Heading size="md">Shipping Method</Heading>
      <RadioGroup defaultValue='5' onChange={setShipping} colorScheme="pink" size="lg">
        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          spacing="6"
        >
          <Radio value='10' spacing="3" flex="1">
            <Box>
              <HStack color={useColorModeValue('black', 'white')}>
                <Text fontWeight="medium">Express</Text>
                <Text fontWeight="bold">$10</Text>
              </HStack>

              <Text color={useColorModeValue('gray.600', 'gray.400')}>Dispatched in 24 hours</Text>
            </Box>
          </Radio>
          <Radio value='5' spacing="3" flex="1">
            <Box>
              <HStack color={useColorModeValue('black', 'white')}>
                <Text fontWeight="medium">Standard</Text>
                <Text fontWeight="bold">$5</Text>
              </HStack>
              <Text color={useColorModeValue('gray.600', 'gray.400')}>Dispatched in 1 - 2 days</Text>
            </Box>
          </Radio>
        </Stack>
      </RadioGroup>
    </Stack>
  </>
}