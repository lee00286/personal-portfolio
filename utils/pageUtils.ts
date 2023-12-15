const baseSlugs = [
  'profile',
  'education',
  'professional-experiences',
  'other-experiences',
  'extracurricular-activities',
  'awards-and-certificates'
];

const secondarySlugs = {
  [baseSlugs[1]]: ['relevant-courses']
};

export const indexToSlug = (index: number): string => {
  if (index >= 0 && index < baseSlugs.length) {
    return baseSlugs[index];
  }
  return '';
};

export const slugToIndex = (slug: string): number => {
  return baseSlugs.findIndex((s) => s === slug);
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

export const isSlugAccepted = (slug: string[]): boolean => {
  if (baseSlugs.includes(slug[0])) {
    if (slug.length === 1) return true;
    const primarySlug = secondarySlugs[slug[0]];
    if (primarySlug && primarySlug.includes(slug[1])) return true;
  }
  return false;
};
