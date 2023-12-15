import { notFound } from 'next/navigation';
import { Box } from '@chakra-ui/react';
import PageBlock from '@/components/PageBlock';
import SidebarWithHeader from '@/components/SidebarWithHeader';
import { isSlugAccepted } from '@/utils/pageUtils';

function Page({ params }: { params: { slug: string[] } }) {
  if (!params?.slug) {
    return (
      <main>
        <SidebarWithHeader>
          <Box></Box>
        </SidebarWithHeader>
      </main>
    );
  }
  if (!isSlugAccepted(params.slug)) return notFound();

  return (
    <main>
      <SidebarWithHeader>
        <PageBlock params={params} />
      </SidebarWithHeader>
    </main>
  );
}

export default Page;
