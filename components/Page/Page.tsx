'use client';

import { usePathname } from 'next/navigation';
import { Box } from '@chakra-ui/react';
import { renderContentfulRichText } from '@/contentful/utils';
import { Document } from '@contentful/rich-text-types';
import { usePageContext } from '@/context/pageState';
import Assets from '@/components/Assets/Assets';
import ContainerBox from '@/components/CustomBox/ContainerBox';
import HeadingBox from '@/components/CustomBox/HeadingBox';
import Section from '@/components/Section/Section';
import SpinnerBox from '@/components/CustomBox/SpinnerBox';
import { pathnameToSlug } from '@/utils/pageUtils';

function Page() {
  const { pageData } = usePageContext();
  const pathname = usePathname();

  const slug: string = pathnameToSlug(pathname, true);

  if (!pageData || pageData.pageId < 0) return <SpinnerBox />;

  const pageEmoji: string = pageData.emoji ? pageData.emoji : '';
  const pageTitle: string =
    pageData?.isTitleVisible && pageData.title ? pageData.title : '';
  const pageText =
    pageData?.text && renderContentfulRichText(pageData.text as Document);
  const pageSections = pageData?.sections && pageData.sections;
  const pageMedia = pageData?.media && pageData.media;

  return (
    <ContainerBox variant="page">
      {(pageEmoji || pageTitle) && (
        <HeadingBox variant="page" emoji={pageEmoji} title={pageTitle} />
      )}
      <Box>{pageText}</Box>
      {pageSections &&
        pageSections.length > 0 &&
        pageSections.map((section, index: number) => (
          <Section key={`${slug}-page-${index}`} sectionData={section.fields} />
        ))}
      {pageMedia && pageMedia.length > 0 && <Assets assets={pageMedia} />}
    </ContainerBox>
  );
}

export default Page;
