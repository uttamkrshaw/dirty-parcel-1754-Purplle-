import React, { useState } from "react";
import {
  useToast,
} from "@chakra-ui/react";

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  InputGroup,
  InputRightElement, FormControl, FormLabel, FormHelperText, GridItem, Select, Progress, ButtonGroup
} from "@chakra-ui/react";
// importing router link for navigation
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/548/original/open-uri20171223-4-1oykkjg?1514062155",
  },
  {
    name: "Segun Adebayo",
    url: "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/254/original/open-uri20171223-4-tjb63?1514063317",
  },
  {
    name: "Kent Dodds",
    url: "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/165/original/data?1514062273",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/047/original/open-uri20180708-4-e7idod?1531087336",
  },
  {
    name: "Christian Nwamba",
    url: "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/649/original/open-uri20171223-4-10cz7j2?1514062288",
  },
];

/// Form 


const Form1 = ({ email, setEmail, password, setPassword, username, setUsername, age, setAge }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="user-name" fontWeight={'normal'}>
            User name
          </FormLabel>
          <Input id="user-name" placeholder="User name" value={username} onChange={(e) => { setUsername(e.target.value) }} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="age" fontWeight={'normal'}>
            Age
          </FormLabel>
          <Input id="age" placeholder="Age" value={age} onChange={(e) => { setAge(e.target.value) }} />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            value={password} onChange={(e) => { setPassword(e.target.value) }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

const Form2 = ({ name, setName, mobile, setMobile, pin, setPin, address, setAddress, district, setDistrict, state, setState, type, setType }) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Address Details
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="user-name" fontWeight={'normal'}>
            Name
          </FormLabel>
          <Input id="user-name" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="age" fontWeight={'normal'}>
            10-digit Mobile Number
          </FormLabel>
          <Input id="age" placeholder="Mobile Number" value={mobile} onChange={(e) => { setMobile(e.target.value) }}
          />
        </FormControl>
      </Flex>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          placeholder="Street Address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={address} onChange={(e) => { setAddress(e.target.value) }}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          District
        </FormLabel>
        <Input
          type="text"
          placeholder="District"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={district} onChange={(e) => { setDistrict(e.target.value) }}

        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Address Type
        </FormLabel>
        <Select
          id="state"
          name="state"
          autoComplete="state"
          placeholder="Select Address Type"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={type} onChange={(e) => { setType(e.target.value) }}
        >
          <option value="Home">Home</option>
          <option value="Work">Work</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          ZIP / Postal
        </FormLabel>
        <Input
          type="number"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={pin} onChange={(e) => { setPin(e.target.value) }}
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          State
        </FormLabel>
        <Select
          id="state"
          name="state"
          autoComplete="state"
          placeholder="Select state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={state} onChange={(e) => { setState(e.target.value) }}
        >
          <option value="">Select State</option>
          <option value='Andhra Pradesh'>Andhra Pradesh </option>
          <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
          <option value='Assam'>Assam</option>
          <option value='Bihar'>Bihar</option>
          <option value='Chhattisgarh'>Chhattisgarh</option>
          <option value='Goa'>Goa</option>
          <option value='Gujarat'>Gujarat</option>
          <option value='Haryana'>Haryana</option>
          <option value='Himachal Pradesh'>Himachal Pradesh</option>
          <option value='Jammu and Kashmir'>Jammu and Kashmir</option>
          <option value='Jharkhand'>Jharkhand</option>
          <option value='Karnataka'>Karnataka</option>
          <option value='Kerala'>Kerala</option>
          <option value='Madhya Pradesh'>Madhya Pradesh</option>
          <option value='Maharashtra'>Maharashtra</option>
          <option value='Manipur'>Manipur</option>
          <option value='Meghalaya'>Meghalaya</option>
          <option value='Mizoram'>Mizoram</option>
          <option value='Nagaland'>Nagaland</option>
          <option value='Odisha'>Odisha</option>
          <option value='Punjab'>Punjab</option>
          <option value='Rajasthan'>Rajasthan</option>
          <option value='Tamil Nadu'>Tamil Nadu</option>
          <option value='Telangana'>Telangana</option>
          <option value='Tripura'>Tripura</option>
          <option value='Uttar Pradesh'>Uttar Pradesh</option>
          <option value='Uttarakhand'>Uttarakhand</option>
          <option value='West Bengal'>West Bengal</option>
        </Select>
      </FormControl>
    </>
  );
};

export default function SignUp() {

  const navigate = useNavigate()
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pin, setPin] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [type, setType] = useState("")

  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const handleSubmit = () => {
    const payload = {
      email,
      password,
      username,
      age,
      location: {
        Name: name,
        Mobile_No: mobile,
        Pin_Code: pin,
        Address: address,
        District: district,
        State: state,
        Address_Type: type,
      },
      type: "USER",
      order: {
        ORDERS: [],
        FAV: [],
      },
    };
    axios({
      method: "post",
      url: "https://shy-mittens-mite.cyclic.app/users/register",
      data: payload,
    })
      .then((res) => {
        toast({
          title: "Account created!",
          description: res.data,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login")
      })
      .catch((err) => {
        toast({
          title: "Account already Exists!",
          description: err.request.responseText,
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Join US{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              &
            </Text>{" "}
            Find different ways to win Your loved One's Heart.
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={{ base: "md", md: "lg" }}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, red.400,pink.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
              minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Humko Join Kar Lo
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Join Us & get access to thousand's of products from our different
              lineUp's & Use it to get access to your Partner's Heart.
            </Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Box
              borderWidth="1px"
              rounded="lg"
              shadow="1px 1px 3px rgba(0,0,0,0.3)"
              maxWidth={800}
              p={6}
              m="10px auto"
              as="form">
              <Progress
                hasStripe
                value={progress}
                mb="5%"
                mx="5%"
                colorScheme='pink'
                isAnimated></Progress>
              {step === 1 ? <Form1 username={username} setUsername={setUsername} age={age} setAge={setAge} email={email} setEmail={setEmail} password={password} setPassword={setPassword} /> :
                <Form2 name={name} setName={setName}
                  mobile={mobile} setMobile={setMobile}
                  pin={pin} setPin={setPin}
                  address={address} setAddress={setAddress}
                  district={district} setDistrict={setDistrict}
                  state={state} setState={setState}
                  type={type} setType={setType} />}
              <ButtonGroup mt="5%" w="100%">
                <Flex w="100%" justifyContent="space-between">
                  <Flex>
                    <Button
                      onClick={() => {
                        setStep(step - 1);
                        setProgress(progress - 50);
                      }}
                      isDisabled={step === 1}
                      colorScheme="pink"
                      variant="solid"
                      w="7rem"
                      mr="5%">
                      Back
                    </Button>
                    <Button
                      w="7rem"
                      isDisabled={step === 2}
                      onClick={() => {
                        setStep(step + 1);
                        if (step === 2) {
                          setProgress(100);
                        } else {
                          setProgress(progress + 50);
                        }
                      }}
                      colorScheme="pink"
                      variant="outline">
                      Next
                    </Button>
                  </Flex>
                  {step === 2 ? (
                    <Button
                      w="7rem"
                      colorScheme="red"
                      variant="solid"
                      onClick={() => { handleSubmit() }}
                    >
                      Submit
                    </Button>
                  ) : null}
                </Flex>
              </ButtonGroup>
            </Box>

            <RouterLink to="/login">
              <Button
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.400,pink.400)",
                  boxShadow: "xl",
                }}
              >
                Already a user? Login
              </Button>
            </RouterLink>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
