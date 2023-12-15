import { notFound } from 'next/navigation';
import { Box } from '@chakra-ui/react';
import PageMain from '@/components/PageMain';
import PageBlock from '@/components/PageBlock';
import { isSlugAccepted } from '@/utils/pageUtils';

function Page({ params }: { params: { slug: string[] } }) {
  if (!params?.slug) {
    return (
      <PageMain>
        <Box></Box>
      </PageMain>
    );
  }
  if (!isSlugAccepted(params.slug)) return notFound();

  return (
    <PageMain>
      <PageBlock params={params} />
    </PageMain>
  );
}

export default Page;
