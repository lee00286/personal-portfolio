import { notFound } from 'next/navigation';
import { Box } from '@chakra-ui/react';
import PageMain from '@/components/PageMain';
import PageBlock from '@/components/PageBlock';
import { isSlugAccepted } from '@/utils/pageUtils';

function Page({ params }: { params: { slug: string[] } }) {
  if (!params?.slug) return notFound();
  if (!isSlugAccepted(params.slug)) return notFound();

  if (params.slug.length === 0) {
    return (
      <PageMain>
        <Box></Box>
      </PageMain>
    );
  }

  return (
    <PageMain>
      <PageBlock params={params} />
    </PageMain>
  );
}

export default Page;
