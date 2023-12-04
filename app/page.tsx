import { ChakraProvider } from '@chakra-ui/react';
import Body from '@/components/Body';
import NavBar from '@/components/NavBar';
import { MenuProvider } from '@/context/menuState';

export const styles =
  'min-h-screen flex justify-center items-center lg:p-16 md:p-0 font-mono bg-yellow-50';

export default function Home() {
  return (
    <ChakraProvider>
      <MenuProvider>
        <NavBar />
        <main className={styles}>
            <Body />
        </main>
      </MenuProvider>
    </ChakraProvider>
  );
}
