import {
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { useSelector } from "react-redux"

export const ShippingInformation = () => {
  const user = useSelector((store) => store.UserReducer.user)
  return <>
    <Stack
      spacing={{
        base: '6',
        md: '10',
      }}
    >
      <Heading size="md">Shipping Information</Heading>
      <Stack
        spacing={{
          base: '6',
          md: '8',
        }}
      >
        <FormControl id="name">
          <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Full name</FormLabel>
          <Input
            name="name"
            isDisabled
            value={user[0].location.Name}
            placeholder="Your first and last name"
            focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
          />
        </FormControl>
        <FormControl id="street">
          <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Street address</FormLabel>
          <Input
            name="street"
            isDisabled
            value={user[0].location.Address}
            placeholder="123 Example Street"
            focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
          />
        </FormControl>
        <HStack spacing="6">
          <FormControl id="zip" maxW="32">
            <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Zip Code</FormLabel>
            <Input
              name="zip"
              isDisabled
              placeholder="Zip Code"
              value={user[0].location.Pin_Code}
              focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
            />
          </FormControl>
          <FormControl id="city">
            <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>District</FormLabel>
            <Input
              name="district"
              isDisabled
              placeholder="District"
              value={user[0].location.District}
              focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
            />
          </FormControl>
        </HStack>
        <HStack spacing="6">
          <FormControl id="state" maxW="32">
            <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>State</FormLabel>
            <Input
              name="state"
              isDisabled
              placeholder="State"
              value={user[0].location.State}
              focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
            />
          </FormControl>
          <FormControl id="mobile_no">
            <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Mobile No</FormLabel>
            <Input
              name="mobile_no"
              isDisabled
              placeholder="Mobile No"
              value={user[0].location.Mobile_No}
              focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
            />
          </FormControl>
        </HStack>
        <FormControl id="account">
            <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Account Type</FormLabel>
            <Select isDisabled value={user[0].location.Address_Type}>
              <option value="Home">Home</option>
              <option value="Work">Work</option>
            </Select>
          </FormControl>
        <FormControl id="email">
          <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Email address</FormLabel>
          <Input
            name="email"
            isDisabled
            placeholder="you@exmaple.com"
            value={user[0].email}
            focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
          />
        </FormControl>
        <Checkbox defaultChecked spacing="4" colorScheme="pink">
          Billing address is same as shipping
        </Checkbox>
      </Stack>
    </Stack>
  </>
}