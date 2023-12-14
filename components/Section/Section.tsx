import { Flex } from '@chakra-ui/react';
import { Document } from '@contentful/rich-text-types';
import { ContentfulSection } from '@/contentful/types';
import { renderContentfulRichText } from '@/contentful/utils';
import Assets from '@/components/Assets/Assets';
import ContainerBox from '@/components/CustomBox/ContainerBox';
import ContentBox from '@/components/CustomBox/ContentBox';
import HeadingBox from '@/components/CustomBox/HeadingBox';
import IconTagBox from '@/components/CustomBox/IconTagBox';
import Line from '@/components/Line/Line';
import LinkToPage from '@/components/SubPage/LinkToPage';
import SpinnerBox from '@/components/CustomBox/SpinnerBox';

function Section({ sectionData }: { sectionData: ContentfulSection }) {
  if (!sectionData) return <SpinnerBox />;

  const sectionEmoji: string = sectionData.emoji ? sectionData.emoji : '';
  const sectionTitle: string =
    sectionData?.isTitleVisible && sectionData.title ? sectionData.title : '';
  const sectionText =
    sectionData?.text && renderContentfulRichText(sectionData.text as Document);
  const sectionLines = sectionData?.lines && sectionData.lines;
  const sectionStartDate = sectionData?.startDate && sectionData.startDate;
  const sectionEndDate = sectionData?.endDate && sectionData.endDate;
  const sectionLocation = sectionData?.location && sectionData.location;
  const sectionSubPages = sectionData?.subPages && sectionData.subPages;
  const sectionMedia = sectionData?.media && sectionData.media;

  return (
    <ContainerBox variant="section">
      {(sectionEmoji || sectionTitle) && (
        <HeadingBox
          variant="section"
          emoji={sectionEmoji}
          title={sectionTitle}
        />
      )}
      {(sectionStartDate || sectionLocation) && (
        <Flex gap={{ md: '2' }} direction={{ base: 'column', md: 'row' }}>
          {sectionStartDate && (
            <IconTagBox
              variant="date"
              text={`${sectionStartDate}${
                sectionEndDate ? ` ~ ${sectionEndDate}` : ''
              }`}
            />
          )}
          {sectionLocation && (
            <IconTagBox variant="location" text={sectionLocation} />
          )}
        </Flex>
      )}
      {sectionText && <ContentBox>{sectionText}</ContentBox>}
      {sectionLines &&
        sectionLines.length > 0 &&
        sectionLines.map((line, index: number) => (
          <Line
            key={`section-${sectionData.sectionId}-line-${index}`}
            lineData={line.fields}
          />
        ))}
      {sectionSubPages &&
        sectionSubPages.length > 0 &&
        sectionSubPages.map((page, index: number) => (
          <LinkToPage
            key={`section-${sectionData.sectionId}-subpage-${index}`}
            pageId={page.sys.id}
          />
        ))}
      {sectionMedia && sectionMedia.length > 0 && (
        <Assets assets={sectionMedia} />
      )}
    </ContainerBox>
  );
}

export default Section;
