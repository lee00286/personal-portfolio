import PageBlock from '@/components/PageBlock';
import SidebarWithHeader from '@/components/SidebarWithHeader';

function Page() {
  return (
    <main>
      <SidebarWithHeader>
        <PageBlock />
      </SidebarWithHeader>
    </main>
  );
}

export default Page;
