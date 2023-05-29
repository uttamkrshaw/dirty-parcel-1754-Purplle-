import { Box, Flex, Stack, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { ShippingInformation } from '../Mini_Components/User_Site/CheckoutPageComponent/ShippingInformation'
import { ShippingMethod } from '../Mini_Components/User_Site/CheckoutPageComponent/ShippingMethod'
import { PaymentInformation } from '../Mini_Components/User_Site/CheckoutPageComponent/PaymentInformation'
import { OrderSummary } from '../Mini_Components/User_Site/CheckoutPageComponent/OrderSummary'
import DefaultNavbar from '../Mini_Components/User_Site/Header/Header'
import DefaultFooter from '../Mini_Components/User_Site/Footer/Footer'

export const Checkout = () => {
    return <>
        <DefaultNavbar />
        <Box
            bgGradient={useColorModeValue(
                'linear(to-l, gray.50 50%, white 50%)',
                'linear(to-l, gray.700 50%, gray.800 50%)',
            )}
        >
            <Flex
                maxW="8xl"
                mx="auto"
                direction={{
                    base: 'column',
                    md: 'row',
                }}
            >
                <Box
                    flex="1"
                    bg={useColorModeValue('white', 'gray.800')}
                    px={{
                        base: '4',
                        md: '8',
                        lg: '12',
                        xl: '20',
                    }}
                    py={{
                        base: '6',
                        md: '8',
                        lg: '12',
                        xl: '20',
                    }}
                >
                    <Stack
                        spacing={{
                            base: '16',
                            lg: '20',
                        }}
                    >
                        <ShippingInformation />
                        <ShippingMethod />
                        <PaymentInformation />
                    </Stack>
                </Box>
                <Box
                    flex="1"
                    maxW={{
                        lg: 'md',
                        xl: '40rem',
                    }}
                    bg={useBreakpointValue({
                        base: useColorModeValue('white', 'gray.800'),
                        md: 'inherit',
                    })}
                    px={{
                        base: '4',
                        md: '8',
                        lg: '12',
                        xl: '20',
                    }}
                    py={{
                        base: '6',
                        md: '8',
                        lg: '12',
                        xl: '20',
                    }}
                >
                    <OrderSummary />
                </Box>
            </Flex>
        </Box>
        <DefaultFooter />
    </>
}