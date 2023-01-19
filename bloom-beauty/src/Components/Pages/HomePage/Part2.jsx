import { Image, Box, Flex } from "@chakra-ui/react";
function Part2() {
    return (
        <>
            <Flex w="full"
                bg="#EEEEEE"
                _dark={{
                    bg: "#1A120B",
                }}
                p={10}
                alignItems="center"
                justifyContent="center">
                <Box boxSize='6xl' margin="auto">
                    <Image src='https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674099518_mamaearth_web_thick-strip.gif' alt='Dan Abramov' />
                    <Image src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673939041_unmissable-deals_web_10.gif" alt="" />
                </Box>
            </Flex>
        </>
    )
}
export default Part2


