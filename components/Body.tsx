'use client';

import { useMenuContext } from '@/context/menuState';
import { useEffect, useState } from 'react';

const bodyStyle: string =
  'z-0 fixed left-0 top-0 inset-y-auto flex justify-center items-start w-full h-full p-4 border-b bg-gradient-to-b from-yellow-200 backdrop-blur-2xl dark:bg-yellow-700/10 dark:from-inherit text-zinc-800';
const bodyStyleLg: string =
  'lg:static lg:left-auto lg:bottom-auto lg:ml-10 lg:inset-x-0 lg:inset-y-0 lg:flex-col lg:justify-center lg:w-3/4 lg:h-auto lg:rounded-xl lg:border lg:bg-yellow-200 lg:dark:bg-yellow-700/10 lg:drop-shadow-md';

function Body() {
  const { currentPage } = useMenuContext();

  const [currentBody, setcurrentBody] = useState<React.ReactNode>(<div />);

  useEffect(() => {
    if (currentPage === undefined) return;
  }, [currentPage]);

  return <div className={`${bodyStyle} ${bodyStyleLg}`}>{currentBody}</div>;
}

export default Body;
