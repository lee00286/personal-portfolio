'use client';

import { useRouter, usePathname } from 'next/navigation';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Center,
  Link,
  useColorMode
} from '@chakra-ui/react';
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  ChevronDownIcon,
  MusicalNoteIcon,
  PuzzlePieceIcon,
  TrophyIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { useDeployContext } from '@/context/deployContext';
import { indexToSlug, pathnameToSlug, slugToIndex } from '@/utils/pageUtils';

const debug = process.env.NODE_ENV !== 'production';
const repository = 'portfolio';

interface LinkItemProps {
  name: string;
  icon: any;
}

interface NavItemProps extends FlexProps {
  icon: any;
  navIndex: number;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Profile', icon: UserIcon },
  { name: 'Education', icon: AcademicCapIcon },
  { name: 'Professional Experiences', icon: BuildingOffice2Icon },
  { name: 'Other Experiences', icon: PuzzlePieceIcon },
  { name: 'Extracurricular Activities', icon: MusicalNoteIcon },
  { name: 'Awards & Certifications', icon: TrophyIcon }
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { prefix } = useDeployContext();
  const { push } = useRouter();
  const borderColor = useColorModeValue('yellow.200', 'gray.500');
  const bgColor = useColorModeValue('white', 'gray.900');

  return (
    <Box
      pos="fixed"
      border={{ base: 0, md: '2px' }}
      borderRadius={{ base: 0, md: 'lg' }}
      borderColor={{ md: borderColor }}
      pt="4"
      pb="4"
      w={{ base: 'full', md: 60 }}
      h={{ base: 'full', md: 'auto' }}
      bg={bgColor}
      transition="3s ease"
      {...rest}
    >
      <Center h="20" mx="8" mb="2">
        <Image
          boxSize="50px"
          src={`${prefix}/logo-icon.gif`}
          alt="Logo icon for the page - Duck Emoji"
        />
      </Center>
      <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      {LinkItems.map((link, index) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          navIndex={index}
          onClick={() =>
            push(`${!debug ? `/${repository}` : ''}/${indexToSlug(index)}`)
          }
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, navIndex, children, ...rest }: NavItemProps) => {
  const pathname = usePathname();

  const highlightedBgColor = useColorModeValue('yellow.300', 'gray.700');
  const bgColor = useColorModeValue('white', 'gray.900');
  const hoverBgColor = useColorModeValue('yellow.300', 'gray.700');

  const isCurrPage = slugToIndex(pathnameToSlug(pathname)) === navIndex;

  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        mx="4"
        my="2"
        borderRadius="lg"
        px="4"
        py="2"
        role="group"
        cursor="pointer"
        bg={isCurrPage ? highlightedBgColor : bgColor}
        _hover={{ background: hoverBgColor }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'black'
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { prefix } = useDeployContext();
  const { push } = useRouter();
  const { toggleColorMode } = useColorMode();

  const linkedInUrl = process.env.NEXT_PUBLIC_PROFILE_LINKEDIN || '';
  const gitHubUrl = process.env.NEXT_PUBLIC_PROFILE_GITHUB || '';

  return (
    <Flex
      ml={{ base: 0, md: 64 }}
      px={{ base: 4, md: 4 }}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      alignItems="center"
      borderTop={{ base: 0, md: '2px' }}
      borderRight={{ base: 0, md: '2px' }}
      borderBottom="2px"
      borderLeft={{ base: 0, md: '2px' }}
      borderRadius={{ base: 0, md: 'lg' }}
      borderColor={{
        base: useColorModeValue('yellow.300', 'gray.700'),
        md: useColorModeValue('yellow.300', 'gray.700')
      }}
      h="20"
      bg={useColorModeValue('white', 'gray.900')}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<ChevronDownIcon />}
      />
      <Image
        display={{ base: 'flex', md: 'none' }}
        boxSize="50px"
        src={`${prefix}/logo-icon.gif`}
        alt="Logo icon for the page - Duck Emoji"
      />
      <HStack spacing={{ base: '0', md: '6' }}>
        {/* <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} /> */}
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Yena Lee</Text>
                  <Text fontSize="xs" color="gray.600">
                    She/her
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <ChevronDownIcon />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem
                onClick={() =>
                  push(`${!debug ? `/${repository}` : ''}/profile`)
                }
              >
                Profile
              </MenuItem>
              <MenuItem>
                <Link href={linkedInUrl} w="full" isExternal>
                  LinkedIn
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href={gitHubUrl} w="full" isExternal>
                  GitHub
                </Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem onClick={toggleColorMode}>Switch Color Mode</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SidebarWithHeader = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="100vw" minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box
        mt={{ base: 0, md: 4 }}
        ml={{ base: 0, md: 64 }}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        alignItems="center"
        border={{ base: 0, md: '2px' }}
        borderRadius={{ base: 0, md: 'lg' }}
        borderColor={{
          base: useColorModeValue('yellow.300', 'gray.700'),
          md: useColorModeValue('yellow.300', 'gray.700')
        }}
        p="4"
        bg={useColorModeValue('white', 'gray.900')}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
