'use client';

import { useMenuContext } from '@/context/menuState';
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  MusicalNoteIcon,
  PuzzlePieceIcon,
  TrophyIcon,
  UserIcon
} from '@heroicons/react/24/outline';

function NavBar() {
  const { currentPage, setCurrentPage } = useMenuContext();

  const navStyle: string =
    'z-50 fixed left-0 bottom-0 inset-y-auto flex justify-between w-full h-auto px-3 py-4 border-b bg-gradient-to-b from-yellow-200 backdrop-blur-2xl dark:bg-yellow-700/30 dark:from-inherit';
  const navStyleLg: string =
    'lg:static lg:left-auto lg:bottom-auto lg:inset-x-0 lg:inset-y-0 lg:flex-col lg:justify-center lg:w-auto lg:rounded-xl lg:border lg:bg-yellow-200 lg:dark:bg-yellow-700/30 lg:drop-shadow-md';

  const menuStyle = (pageNum: number, isLast = false): string => {
    return `select-none h-12 w-12 p-2 bg-gradient-to-b rounded-xl cursor-pointer lg:h-20 lg:w-20 lg:p-4 ${
      !isLast && 'mb-0 lg:mb-2'
    } ${
      currentPage === pageNum ? 'bg-yellow-800/30' : 'hover:bg-yellow-800/30'
    }`;
  };

  return (
    <div className={`${navStyle} ${navStyleLg}`}>
      <div className={menuStyle(0)} onClick={() => setCurrentPage(0)}>
        <UserIcon className="m-0" />
      </div>
      <div className={menuStyle(1)} onClick={() => setCurrentPage(1)}>
        <AcademicCapIcon className="m-0" />
      </div>
      <div className={menuStyle(2)} onClick={() => setCurrentPage(2)}>
        <BuildingOffice2Icon className="m-0" />
      </div>
      <div className={menuStyle(3)} onClick={() => setCurrentPage(3)}>
        <PuzzlePieceIcon className="m-0" />
      </div>
      <div className={menuStyle(4)} onClick={() => setCurrentPage(4)}>
        <MusicalNoteIcon className="m-0" />
      </div>
      <div className={menuStyle(5, true)} onClick={() => setCurrentPage(5)}>
        <TrophyIcon className="m-0" />
      </div>
    </div>
  );
}

export default NavBar;
