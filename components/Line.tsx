import { Flex, Heading } from '@chakra-ui/react';
import { Document } from '@contentful/rich-text-types';
import { renderContentfulRichText } from '@/contentful/utils';
import Assets from '@/components/Assets/Assets';
import ContainerBox from '@/components/CustomBox/ContainerBox';
import ContentBox from '@/components/CustomBox/ContentBox';
import IconTagBox from '@/components/CustomBox/IconTagBox';
import SpinnerBox from '@/components/CustomBox/SpinnerBox';
import { ContentfulLine } from '@/contentful/types';

function Line({ lineData }: { lineData: ContentfulLine }) {
  if (!lineData) return <SpinnerBox variant="line" />;

  const lineTitle: string =
    lineData?.isTitleVisible && lineData.title ? lineData.title : '';
  const lineText =
    lineData?.text && renderContentfulRichText(lineData.text as Document);
  const lineStartDate = lineData?.startDate && lineData.startDate;
  const lineEndDate = lineData?.endDate && lineData.endDate;
  const lineLocation = lineData?.location && lineData.location;
  const lineMedia = lineData?.media && lineData.media;

  return (
    <ContainerBox variant="line">
      {lineTitle && <Heading variant="line">{lineTitle}</Heading>}
      {(lineStartDate || lineLocation) && (
        <Flex gap={{ md: '2' }} direction={{ base: 'column', md: 'row' }}>
          {lineStartDate && (
            <IconTagBox
              variant="date"
              text={`${lineStartDate}${lineEndDate ? ` ~ ${lineEndDate}` : ''}`}
            />
          )}
          {lineLocation && (
            <IconTagBox variant="location" text={lineLocation} />
          )}
        </Flex>
      )}
      {lineText && <ContentBox>{lineText}</ContentBox>}
      {lineMedia && lineMedia.length > 0 && <Assets assets={lineMedia} />}
    </ContainerBox>
  );
}

export default Line;
