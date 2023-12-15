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
  MenuList,
  Image,
  Center,
  useColorMode
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  ChevronDownIcon,
  MusicalNoteIcon,
  PuzzlePieceIcon,
  TrophyIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import ColorModeButton from '@/components/ColorModeButton';
import MenuItemBox from '@/components/CustomBox/MenuItemBox';
import NavBox from '@/components/CustomBox/NavBox';
import SidebarBox from '@/components/CustomBox/SidebarBox';
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

  return (
    <SidebarBox {...rest}>
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
    </SidebarBox>
  );
};

const NavItem = ({ icon, navIndex, children, ...rest }: NavItemProps) => {
  const pathname = usePathname();

  const isCurrPage: boolean =
    slugToIndex(pathnameToSlug(pathname)) === navIndex;

  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <NavBox variant={isCurrPage ? 'current' : 'default'} {...rest}>
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
      </NavBox>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { prefix } = useDeployContext();
  const { push } = useRouter();
  const { toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue('body.light', 'body.dark');
  const borderColor = useColorModeValue('border.light', 'border.dark');

  const linkedInUrl = process.env.NEXT_PUBLIC_PROFILE_LINKEDIN || '';
  const gitHubUrl = process.env.NEXT_PUBLIC_PROFILE_GITHUB || '';

  return (
    <NavBox variant="mobile" {...rest}>
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
      <ColorModeButton />
      <HStack
        spacing={{ base: '0', md: '6' }}
        display={{ base: 'none', md: 'flex' }}
      >
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
                  <Text fontSize="xs" variant="navSubText">
                    She/her
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <ChevronDownIcon />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList bgColor={bgColor} borderColor={borderColor}>
              <MenuItemBox
                onMenuItem={() =>
                  push(`${!debug ? `/${repository}` : ''}/profile`)
                }
              >
                Profile
              </MenuItemBox>
              <MenuDivider />
              <MenuItemBox>
                <Link href={linkedInUrl} w="full" isExternal>
                  LinkedIn
                </Link>
              </MenuItemBox>
              <MenuItemBox>
                <Link href={gitHubUrl} w="full" isExternal>
                  GitHub
                </Link>
              </MenuItemBox>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </NavBox>
  );
};

const SidebarWithHeader = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="full" minH="full">
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
      <NavBox variant="body">{children}</NavBox>
    </Box>
  );
};

export default SidebarWithHeader;
