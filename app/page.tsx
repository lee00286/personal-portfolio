import Body from '@/components/Body';
import NavBar from '@/components/NavBar';
import { MenuProvider } from '@/context/menuState';

export default function Home() {
  return (
    <main className="flex min-h-screen flex items-center justify-center p-24 font-mono bg-yellow-50">
      <MenuProvider>
        <NavBar />
        <Body />
      </MenuProvider>
    </main>
  );
}
