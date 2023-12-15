import PageMain from '@/components/PageMain';
import PageBlock from '@/components/PageBlock';

function Page({ params }: { params: { slug: string } }) {
  return (
    <PageMain>
      <PageBlock params={params} />
    </PageMain>
  );
}

export default Page;
