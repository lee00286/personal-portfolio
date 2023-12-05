import { ChakraProvider } from '@chakra-ui/react';
import Body from '@/components/Body';
import SidebarWithHeader from '@/components/SidebarWithHeader';
import { MenuProvider } from '@/context/menuState';
import { PageProvider } from '@/context/pageState';

export const styles =
  'min-h-screen flex justify-center items-center md:p-16 md:p-0 font-mono bg-yellow-50';

export default function Home() {
  return (
    <ChakraProvider>
      <MenuProvider>
        <PageProvider>
          <main className={styles}>
            <SidebarWithHeader>
              <Body />
            </SidebarWithHeader>
          </main>
        </PageProvider>
      </MenuProvider>
    </ChakraProvider>
  );
}
