'use client';

import { useMenuContext } from '@/context/menuState';
import Profile from '@/components/Page/Profile';
import Education from '@/components/Page/Education';

function Body() {
  const { currentPage } = useMenuContext();

  if (currentPage === 0) return <Profile />;
  if (currentPage === 1) return <Education />;
  return <Profile />;
}

export default Body;
