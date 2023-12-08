export const indexToSlug = (index: number): string => {
  if (index === 0) return 'profile';
  if (index === 1) return 'education';
  if (index === 2) return 'professionalExperiences';
  if (index === 3) return 'otherExperiences';
  if (index === 4) return 'extracurricularActivities';
  if (index === 5) return 'awardsAndCertification';
  return '';
};

export const slugToIndex = (slug: string): number => {
  if (slug === 'profile') return 0;
  if (slug === 'education') return 1;
  if (slug === 'professionalExperiences') return 2;
  if (slug === 'otherExperiences') return 3;
  if (slug === 'extracurricularActivities') return 4;
  if (slug === 'awardsAndCertification') return 5;
  return -1;
};
