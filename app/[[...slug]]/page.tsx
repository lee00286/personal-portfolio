import { notFound } from 'next/navigation';
import PageMain from '@/components/PageMain';
import PageBlock from '@/components/PageBlock';
import { isSlugAccepted } from '@/utils/pageUtils';

function Page({ params }: { params: { slug: string[] } }) {
  if (!params?.slug || params.slug.length === 0) return notFound();
  if (!isSlugAccepted(params.slug)) return notFound();

  return (
    <PageMain>
      <PageBlock params={params} />
    </PageMain>
  );
}

export default Page;
