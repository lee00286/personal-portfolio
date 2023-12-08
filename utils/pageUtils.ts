export const indexToSlug = (index: number): string => {
  if (index === 0) return 'profile';
  if (index === 1) return 'education';
  if (index === 2) return 'professional-experiences';
  if (index === 3) return 'other-experiences';
  if (index === 4) return 'extracurricular-activities';
  if (index === 5) return 'awards-and-certificates';
  return '';
};

export const slugToIndex = (slug: string): number => {
  if (slug === 'profile') return 0;
  if (slug === 'education') return 1;
  if (slug === 'professional-experiences') return 2;
  if (slug === 'other-experiences') return 3;
  if (slug === 'extracurricular-activities') return 4;
  if (slug === 'awards-and-certificates') return 5;
  return -1;
};

export const pathnameToSlug = (pathname: string, isParam = false): string => {
  if (!pathname) return '';
  const splitPathname: string[] = pathname.split('/');
  if (isParam) {
    for (let i = splitPathname.length - 1; i >= 0; i--) {
      if (splitPathname[i] !== '') return splitPathname[i];
    }
  }
  return splitPathname[1];
};
