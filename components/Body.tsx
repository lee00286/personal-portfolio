'use client';

import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useMenuContext } from '@/context/menuState';
import Profile from '@/components/Profile/Profile';

function Body() {
  const { currentPage } = useMenuContext();

  const [currentBody, setcurrentBody] = useState<React.ReactNode>(<Box />);

  useEffect(() => {
    if (currentPage === 0) setcurrentBody(Profile);
    else setcurrentBody(<Box />);
  }, [currentPage]);

  return <Box>{currentBody}</Box>;
}

export default Body;
