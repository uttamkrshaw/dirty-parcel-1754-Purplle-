import {
    Menu,
    MenuButton,
    Avatar,
    VStack,
    MenuList,
    HStack,
    MenuItem,
    MenuDivider,
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { FiChevronDown } from "react-icons/fi"
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default function DefaultNavbar() {
    const { isOpen, onToggle } = useDisclosure();
    let isAuth = useSelector((store) => store.UserReducer.isAuth)
    const user = useSelector((store)=>store.UserReducer.user)
    console.log("isAuth",isAuth)
    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', '#EEEEEE')}
                color={useColorModeValue('pink.400', '#FF597B')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('pink.400', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <RouterLink to={'/'}><Avatar size='sm' name='Dan Abrahmov' src='https://i.ibb.co/B4sbbC5/logo.png' /> </RouterLink>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('pink.400', '#FF597B')}>
                        BloomBeauty
                    </Text>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    {isAuth ?
                        <>
                            <Menu>
                                <MenuButton
                                    py={2}
                                    transition="all 0.3s"
                                    _focus={{ boxShadow: 'none' }}>
                                    <HStack>
                                        <Avatar
                                            size={'sm'}
                                        />
                                        <VStack
                                            display={{ base: 'none', md: 'flex' }}
                                            alignItems="flex-start"
                                            spacing="1px"
                                            ml="2">
                                            <Text fontSize="md">
                                                {user[0].username}
                                            </Text>
                                        </VStack>
                                        <Box display={{ base: 'none', md: 'flex' }}>
                                            <FiChevronDown />
                                        </Box>
                                    </HStack>
                                </MenuButton>
                                <MenuList
                                    bg={'white'}
                                    borderColor={('white', 'pink.400')}>
                                    <MenuItem>User Details</MenuItem>
                                    <MenuDivider />
                                    <MenuItem>Cart</MenuItem>
                                    <MenuDivider />
                                    <MenuItem>Admin Panel</MenuItem>
                                    <MenuDivider />
                                    <MenuItem>Sign out</MenuItem>
                                </MenuList>
                            </Menu>
                        </>
                        :
                        <>
                            <RouterLink to='/signUp'>
                                <Button
                                    display={{ base: 'none', md: 'inline-flex' }}
                                    fontSize={'sm'}
                                    fontWeight={600}
                                    color={'white'}
                                    bg={'pink.400'}
                                    href={'/signUp'}
                                    _hover={{
                                        bg: 'pink.300',
                                    }}>
                                    Sign In
                                </Button>
                            </RouterLink>
                        </>
                    }
                </Stack>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('pink.400', '#FF8E9E');
    const linkHoverColor = useColorModeValue('pink.600', '#FF597B');
    const popoverContentBgColor = useColorModeValue('#EEEEEE', '#F9B5D0');


    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'lg'}
                                bg={popoverContentBgColor}
                                p={2}
                                rounded={'lg'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('pink.400', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        color={'pink.400'}
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link color={"pink.300"} key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Products',
        children: [
            {
                label: 'Blush',
                href: '#',
            },
            {
                label: 'Bronzer',
                href: '#',
            },
            {
                label: 'Eyebrow',
                href: '#',
            },
            {
                label: 'EyeLiner',
                href: '#',
            },
            {
                label: 'Eyeshadow',
                href: '#',
            },
            {
                label: 'Foundation',
                href: '#',
            },
            {
                label: 'LipLiner',
                href: '#',
            },
            {
                label: 'LipStick',
                href: '#',
            },
            {
                label: 'Mascara',
                href: '#',
            },
            {
                label: 'NailPolish',
                href: '#',
            },
        ],
    },
    {
        label: 'Search For Products',
        href: '/products',
    },
    {
        label: 'OFFERS',
        href: '#',
    }
];