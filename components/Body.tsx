function Body({ children }: { children: React.ReactNode }) {
  const bodyStyle: string =
    'z-0 fixed left-0 top-0 inset-y-auto flex justify-center items-start w-full h-auto px-3 py-4 border-b bg-gradient-to-b from-yellow-200 backdrop-blur-2xl dark:bg-yellow-700/10 dark:from-inherit';
  const bodyStyleLg: string =
    'lg:static lg:left-auto lg:bottom-auto lg:ml-10 lg:inset-x-0 lg:inset-y-0 lg:flex-col lg:justify-center lg:w-auto lg:w-auto lg:rounded-xl lg:border lg:bg-yellow-200 lg:dark:bg-yellow-700/10 lg:drop-shadow-md';

  return <div className={`${bodyStyle} ${bodyStyleLg}`}>{children}</div>;
}

export default Body;
